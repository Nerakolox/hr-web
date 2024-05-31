<template>
    <div style="border: 1px solid #ccc">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 400px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onEditorCreated"
            @onChange="inputing"
        />
    </div>
</template>
  
<script>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import http from '../../utils/axios'
import Cookies from 'js-cookie'
export default {
    components: { 
        Editor,Toolbar
    },
    props:{
        newHtml:''
    },
    data() {
        return {
            html: '',
            toolbarConfig: {},
            editorConfig: {
                MENU_CONF:{
                    uploadImage:{
                        placeholder: '*手机阅览效果可能与真实展示样式有出入',
                        server: `${http.defaults.baseURL}/upload/image`,
                        fieldName: 'file',
                        maxFileSize: 10 * 1024 * 1024,
                        maxNumberOfFiles: 10,
                        allowedFileTypes: ['image/*'],
                        headers: {
                            Authorization:`Bearer ${Cookies.get('token')}`
                        },
                        withCredentials: true,
                        timeout: 60 * 1000,
                        async customUpload(file, insertFn) {
                            console.log(file)
                            const formData = new FormData()
                            formData.append('file', file)
                            http.post('/upload/image',formData,{
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                },
                            })
                                .then(res=>{
                                    console.log(res)
                                    function extractText(text) {
                                        const match = text.match(/[^\s\p{P}][\s\S]*/u)
                                        return match ? match[0] : ''
                                    }
                                    insertFn(`${http.defaults.baseURL}/${extractText(res.data.url)}`, res.data.alt, `${http.defaults.baseURL}/${extractText(res.data.href)}`)
                                })
                        }
                    }
                }
            },
            mode: 'simple', // or 'simple'default
            editorRef: null,
        }
    },
    mounted(){
        // console.log(this.editorRef)
        // console.log(this.editorConfig)
        this.html=this.newHtml
    },
    created(){

    },
    methods: {
        onEditorCreated(editor) {
            this.editorRef = Object.seal(editor) // 使用 Object.seal() 来确保编辑器实例不被修改
            console.log(this.html,111,this.newHtml)
            this.html=this.newHtml
        },
        inputing(){
            this.$emit('inputing',this.html)
        }
    },
    beforeUnmount() {
        const editor = this.editorRef
        if (editor) {
            editor.destroy() // 组件销毁时，及时销毁编辑器
        }
    },
    watch:{
        newHtml(newVal,oldVal){
            console.log(newVal,'----------------.>',oldVal)
            this.html=this.newHtml
        }
    }
  }
  </script>
  