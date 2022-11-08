/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

 "use strict";

 $(document).on('click', 'a[data-ajax-popup="true"], button[data-ajax-popup="true"]', function () {
     var title = $(this).data('title');
     var size = ($(this).data('size') == '') ? 'md' : $(this).data('size');
     var url = $(this).data('url');
 
     $("#commanModel .modal-title").html(title);
     $("#commanModel .modal-dialog").addClass('modal-' + size);
     $("#commanModel").modal('show');
 
   
 
     $.get(url, {}, function (data) {
         $('#commanModel .modal-body').html(data);
         
         tinymce_ini();
         // Prevent Bootstrap dialog from blocking focusin
         $(document).on('focusin', function (e) {
             if ($(e.target).closest(".tox-tinymce, .tox-tinymce-aux, .moxman-window, .tam-assetmanager-root").length) {
                 e.stopImmediatePropagation();
             }
         });        
         
        
     });
 
 });
 
 $(document).ready(function () {
     loadConfirm();
     attachment();
     deployment_attachment();
     customization_attachment();
     if($(".data_table").length){
         
         $(".data_table").DataTable()
     }
 });
 
 
 // Delete to open modal
 (function ($, window, i) {
     // Bootstrap 4 Modal
     $.fn.fireModal = function (options) {
         var options = $.extend({
             size: 'modal-md',
             center: false,
             animation: true,
             title: 'Modal Title',
             closeButton: true,
             header: true,
             bodyClass: '',
             footerClass: '',
             body: '',
             buttons: [],
             autoFocus: true,
             created: function () { },
             appended: function () { },
             onFormSubmit: function () { },
             modal: {}
         }, options);
         this.each(function () {
             if ($(this).attr('class').includes('trigger--fire-modal-')) {
                 return;
             }
             i++;
             var id = 'fire-modal-' + i,
                 trigger_class = 'trigger--' + id,
                 trigger_button = $('.' + trigger_class);
             $(this).addClass(trigger_class);
             // Get modal body
             let body = options.body;
             if (typeof body == 'object') {
                 if (body.length) {
                     let part = body;
                     body = body.removeAttr('id').clone().removeClass('modal-part');
                     part.remove();
                 } else {
                     body = '<div class="text-danger">Modal part element not found!</div>';
                 }
             }
             // Modal base template
             var modal_template = '   <div class="modal' + (options.animation == true ? ' fade' : '') + '" tabindex="-1" role="dialog" id="' + id + '">  ' +
                 '     <div class="modal-dialog ' + options.size + (options.center ? ' modal-dialog-centered' : '') + '" role="document">  ' +
                 '       <div class="modal-content">  ' +
                 ((options.header == true) ?
                     '         <div class="modal-header">  ' +
                     '           <h5 class="modal-title">' + options.title + '</h5>  ' +
                     ((options.closeButton == true) ?
                         '           <button type="button" class="close" data-dismiss="modal" aria-label="Close">  ' +
                         '             <span aria-hidden="true">&times;</span>  ' +
                         '           </button>  ' :
                         '') +
                     '         </div>  ' :
                     '') +
                 '         <div class="modal-body">  ' +
                 '         </div>  ' +
                 (options.buttons.length > 0 ?
                     '         <div class="modal-footer">  ' +
                     '         </div>  ' :
                     '') +
                 '       </div>  ' +
                 '     </div>  ' +
                 '  </div>  ';
             // Convert modal to object
             var modal_template = $(modal_template);
             // Start creating buttons from 'buttons' option
             var this_button;
             options.buttons.forEach(function (item) {
                 // get option 'id'
                 let id = "id" in item ? item.id : '';
                 // Button template
                 this_button = '<button type="' + ("submit" in item && item.submit == true ? 'submit' : 'button') + '" class="' + item.class + '" id="' + id + '">' + item.text + '</button>';
                 // add click event to the button
                 this_button = $(this_button).off('click').on("click", function () {
                     // execute function from 'handler' option
                     item.handler.call(this, modal_template);
                 });
                 // append generated buttons to the modal footer
                 $(modal_template).find('.modal-footer').append(this_button);
             });
             // append a given body to the modal
             $(modal_template).find('.modal-body').append(body);
             // add additional body class
             if (options.bodyClass) $(modal_template).find('.modal-body').addClass(options.bodyClass);
             // add footer body class
             if (options.footerClass) $(modal_template).find('.modal-footer').addClass(options.footerClass);
             // execute 'created' callback
             options.created.call(this, modal_template, options);
             // modal form and submit form button
             let modal_form = $(modal_template).find('.modal-body form'),
                 form_submit_btn = modal_template.find('button[type=submit]');
             // append generated modal to the body
             $("body").append(modal_template);
             // execute 'appended' callback
             options.appended.call(this, $('#' + id), modal_form, options);
             // if modal contains form elements
             if (modal_form.length) {
                 // if `autoFocus` option is true
                 if (options.autoFocus) {
                     // when modal is shown
                     $(modal_template).on('shown.bs.modal', function () {
                         // if type of `autoFocus` option is `boolean`
                         if (typeof options.autoFocus == 'boolean')
                             modal_form.find('input:eq(0)').focus(); // the first input element will be focused
                         // if type of `autoFocus` option is `string` and `autoFocus` option is an HTML element
                         else if (typeof options.autoFocus == 'string' && modal_form.find(options.autoFocus).length)
                             modal_form.find(options.autoFocus).focus(); // find elements and focus on that
                     });
                 }
                 // form object
                 let form_object = {
                     startProgress: function () {
                         modal_template.addClass('modal-progress');
                     },
                     stopProgress: function () {
                         modal_template.removeClass('modal-progress');
                     }
                 };
                 // if form is not contains button element
                 if (!modal_form.find('button').length) $(modal_form).append('<button class="d-none" id="' + id + '-submit"></button>');
                 // add click event
                 form_submit_btn.click(function () {
                     modal_form.submit();
                 });
                 // add submit event
                 modal_form.submit(function (e) {
                     // start form progress
                     form_object.startProgress();
                     // execute `onFormSubmit` callback
                     options.onFormSubmit.call(this, modal_template, e, form_object);
                 });
             }
             $(document).on("click", '.' + trigger_class, function () {
                 $('#' + id).modal(options.modal);
                 return false;
             });
         });
     }
     // Bootstrap Modal Destroyer
     $.destroyModal = function (modal) {
         modal.modal('hide');
         modal.on('hidden.bs.modal', function () { });
     }
 })(jQuery, this, 0);
 
 function loadConfirm() {
     $('[data-confirm]').each(function () {
         var me = $(this),
             me_data = me.data('confirm');
         me_data = me_data.split("|");
         me.fireModal({
             title: me_data[0],
             body: me_data[1],
             buttons: [{
                 text: me.data('confirm-text-yes') || 'Yes',
                 class: 'btn btn-sm btn-danger rounded-pill',
                 handler: function () {
                     eval(me.data('confirm-yes'));
                 }
             },
             {
                 text: me.data('confirm-text-cancel') || 'Cancel',
                 class: 'btn btn-sm btn-secondary rounded-pill',
                 handler: function (modal) {
                     $.destroyModal(modal);
                     eval(me.data('confirm-no'));
                 }
             }
             ]
         })
     });
 }
 function tinymce_ini() {
     setTimeout(() => {
         $('#content').each(function () {
             var textarea_id = '#' + $(this).attr('id');
             tinymce.remove(textarea_id);
             tinymce.init({
                 height: "400",
                     selector: '#content',
                     content_style: 'body { font-family: "Inter", sans-serif; }',
                     toolbar: ['styleselect fontselect fontsizeselect','advlist | autolink | link image | lists charmap | print preview| code'],
                     plugins: 'advlist autolink link image lists charmap print preview code'
             });
         });
     }, 100);
 }
 
 
 
 function show_toastr(title, message, type) {
     var o, i;
     var icon = '';
     var cls = '';
     if (type == 'success') {
         icon = 'fas fa-check-circle';
         cls = 'success';
     } else {
         icon = 'fas fa-times-circle';
         cls = 'danger';
     }
     $.notify({ icon: icon, title: " " + title, message: message, url: "" }, {
         element: "body",
         type: cls,
         allow_dismiss: !0,
         placement: { from: 'top', align: 'right' },
         offset: { x: 15, y: 15 },
         spacing: 10,
         z_index: 1080,
         delay: 2500,
         timer: 2000,
         url_target: "_blank",
         mouse_over: !1,
         animate: { enter: o, exit: i },
         template: '<div class="alert alert-{0} alert-icon alert-group alert-notify" data-notify="container" role="alert"><div class="alert-group-prepend alert-content"><span class="alert-group-icon"><i data-notify="icon"></i></span></div><div class="alert-content"><strong data-notify="title">{1}</strong><div data-notify="message">{2}</div></div><button type="button" class="btn close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
     });
 }
 
 function attachment()
 {
     
     var file_input = 0;
     $(document).on('change', '.custom_file_input', function(e) {
         var fileExtension = ['jpeg', 'jpg', 'gif', 'svg', 'png', 'psd', 'pdf', 'doc', 'docx', 'txt', 'xls',
             'xlsx', 'mp4', 'avi', 'mov', 'mkv', 'm4v', 'ppt', 'pptx', 'zip', 'tiff', 'bmp'
         ];
 
         var file_input = 1;
         $(this).parent().next().html('').css('display', 'block');
         if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
             var dd =
                 "Only .jpeg, .jpg, .gif, .svg, .png, .psd, .pdf, .doc, .docx, .txt, .xls, .xlsx, .mp4, .avi, .mov, .mkv, .m4v, .ppt, .pptx, .zip, .tiff, .bmp formats are allowed.";
             $('.attchment_error').html(dd).css('display', 'block');
             
             return false;
         } else {
 
             var filename = e.target.files[0].name;
             console.log(filename);
             $('.custom_file_label').append(filename + '</br>');
             $('.custom_file_input').next().next().remove();
             $('.attchment_error').remove();
             // var dd=$('.custom_file:not(:last-child)').remove();
             var first_child=$('.custom_file_input').parent();
             var last_child=$('.custom_file_input').last();
             // console.log(last_child);
             var  length = $('.custom-file').length;
             var name = length;
             var html = 
                 '<div class="custom-file"><input type="file" class="custom-file-input custom_file_input d-none" name="attachments['+name+']" id="attachment'+name+'"><label for="" class="custom_file_label"></label> <label class=" add_btn ps-0" for="attachment'+name+'"> <i class="fa fa-plus"></i></label><div class="attchment_error"></div></div>';
             $(this).parents('.custom-file').parent().append(html);
         }
 
         dasdas();
     });
 
     function dasdas() {
         var df = $('.custom-file').length - 1;
         $('.custom-file').each(function( index ) {
             if(index == 0 || index == df)
             {
 
             }
             else{
                 $(this).css('display', 'none');
             }
         });
                 
         
     }
 }

 function customization_attachment()
 {
     
     var file_input = 0;
     $(document).on('change', '.customization_custom_file_input', function(e) {
         var fileExtension = ['jpeg', 'jpg', 'gif', 'svg', 'png', 'psd', 'pdf', 'doc', 'docx', 'txt', 'xls',
             'xlsx', 'mp4', 'avi', 'mov', 'mkv', 'm4v', 'ppt', 'pptx', 'zip', 'tiff', 'bmp'
         ];
 
         var file_input = 1;
         $(this).parent().next().html('').css('display', 'block');
         if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
             var dd =
                 "Only .jpeg, .jpg, .gif, .svg, .png, .psd, .pdf, .doc, .docx, .txt, .xls, .xlsx, .mp4, .avi, .mov, .mkv, .m4v, .ppt, .pptx, .zip, .tiff, .bmp formats are allowed.";
             $('.customization_attchment_error').html(dd).css('display', 'block');
             
             return false;
         } else {
 
             var filename = e.target.files[0].name;
              $('.customization_custom_file_label').append(filename + '</br>');
             $('.customization_custom_file_input').next().next().remove();
             $('.customization_attchment_error').remove();
             // var dd=$('.custom_file:not(:last-child)').remove();
             var first_child=$('.customization_custom_file_input').parent();
             var last_child=$('.customization_custom_file_input').last();
             // console.log(last_child);
             var  length = $('.customization_custom-file').length;
             var name = length;
             var html = 
                 '<div class="customization_custom-file"><input type="file" class="customization_custom_file_label customization_custom_file_input d-none" name="attachments['+name+']" id="attachment'+name+'"><label for="" class="customization_custom_file_input"></label> <label class=" add_btn ps-0" for="attachment'+name+'"> <i class="fa fa-plus"></i></label><div class="customization_attchment_error"></div></div>';
             $(this).parents('.customization_custom-file').parent().append(html);
         }
 
         customization();
     });
 
     function customization() {
         var df = $('.customization_custom-file').length - 1;
         console.log(df);
         $('.customization_custom-file').each(function( index ) {
             if(index == 0 || index == df)
             {
 
             }
             else{
                console.log('hii');
                 $(this).css('display', 'none');
             }
         });
                 
         
     }
   }  


     function deployment_attachment()
 {
     
     var file_input = 0;
     $(document).on('change', '.deployment_custom_file_input', function(e) {
         var fileExtension = ['jpeg', 'jpg', 'gif', 'svg', 'png', 'psd', 'pdf', 'doc', 'docx', 'txt', 'xls',
             'xlsx', 'mp4', 'avi', 'mov', 'mkv', 'm4v', 'ppt', 'pptx', 'zip', 'tiff', 'bmp'
         ];
 
         var file_input = 1;
         $(this).parent().next().html('').css('display', 'block');
         if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
             var dd =
                 "Only .jpeg, .jpg, .gif, .svg, .png, .psd, .pdf, .doc, .docx, .txt, .xls, .xlsx, .mp4, .avi, .mov, .mkv, .m4v, .ppt, .pptx, .zip, .tiff, .bmp formats are allowed.";
             $('.deployment_attchment_error').html(dd).css('display', 'block');
             
             return false;
         } else {
 
             var filename = e.target.files[0].name;
              $('.deployment_custom_file_label').append(filename + '</br>');
             $('.deployment_custom_file_input').next().next().remove();
             $('.deployment_attchment_error').remove();
             // var dd=$('.custom_file:not(:last-child)').remove();
             var first_child=$('.deployment_custom_file_input').parent();
             var last_child=$('.deployment_custom_file_input').last();
             // console.log(last_child);
             var  length = $('.deployment_custom-file').length;
             var name = length;
             var html = 
                 '<div class="deployment_custom-file"><input type="file" class="deployment_custom_file_label deployment_custom_file_input d-none" name="attachments['+name+']" id="attachment'+name+'"><label for="" class="deployment_custom_file_input"></label> <label class=" add_btn ps-0" for="attachment'+name+'"> <i class="fa fa-plus"></i></label><div class="deployment_attchment_error"></div></div>';
             $(this).parents('.deployment_custom-file').parent().append(html);
         }
 
         deployment();
     });
 
     function deployment() {
         var df = $('.deployment_custom-file').length - 1;
         console.log(df);
         $('.deployment_custom-file').each(function( index ) {
             if(index == 0 || index == df)
             {
 
             }
             else{
                console.log('hii');
                 $(this).css('display', 'none');
             }
         });
                 
         
     }


 }