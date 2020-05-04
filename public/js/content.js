// eslint-disable-next-line no-undef
$(function () {
    // eslint-disable-next-line no-undef
    $('#example1').DataTable()
    // eslint-disable-next-line no-undef
    $('#example2').DataTable({
        'paging': true,
        'lengthChange': false,
        'searching': false,
        'ordering': true,
        'info': true,
        'autoWidth': false
    })
})