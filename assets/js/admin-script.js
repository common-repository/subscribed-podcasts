jQuery(document).ready(function($){var custom_uploader;$("#upload_image_button").click(function(e){e.preventDefault();if(custom_uploader){custom_uploader.open();return}custom_uploader=wp.media.frames.file_frame=wp.media({title:"Choose OPML XML-File",button:{text:"Choose XML"},multiple:false});custom_uploader.on("select",function(){attachment=custom_uploader.state().get("selection").first().toJSON();$("#subpod_opml_filename").val(attachment.url);$("#subpod_opml_attachment_id").val(attachment.id);$("#subpod-submit").removeAttr("disabled")});custom_uploader.open()});$("#subpod-refresh").on("click",function(e){$("#reloader").html('<img src="/wp-admin/images/wpspin_light-2x.gif" width="16">');e.preventDefault();$.ajax({url:ajax_path,data:{action:"update-podcasts"},dataType:"json"}).done(function(data){if(data["status"]=="OK"){location.href="/wp-admin/options-general.php?page=subpod"}})})});