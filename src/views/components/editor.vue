<template>
    <div style="border: 1px solid #ccc">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 500px; overflow-y: hidden;"
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
    data() {
        return {
            html: '<p>hello</p>',
            toolbarConfig: {},
            editorConfig: {
                MENU_CONF:{
                    uploadImage:{
                        placeholder: '请输入内容...',
                        server: `${http.defaults.baseURL}/awa`,
                        fieldName: 'file',
                        maxFileSize: 10 * 1024 * 1024,
                        maxNumberOfFiles: 10,
                        allowedFileTypes: ['image/*'],
                        headers: {
                            Authorization:`Bearer ${Cookies.get('token')}`
                        },
                        withCredentials: true,
                        timeout: 60 * 1000,
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
    },
    created(){
        
    },
    methods: {
        onEditorCreated(editor) {
            this.editorRef = Object.seal(editor) // 使用 Object.seal() 来确保编辑器实例不被修改
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
    }
  }
  </script>
  