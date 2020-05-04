// eslint-disable-next-line no-undef
$(function () {
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    // eslint-disable-next-line no-undef
    CKEDITOR.replace('editor1')
    //bootstrap WYSIHTML5 - text editor
    // eslint-disable-next-line no-undef
    $('.textarea').wysihtml5()
})