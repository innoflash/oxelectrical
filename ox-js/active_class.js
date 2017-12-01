/**
 * Created by john on 2018/01/25.
 */

$(document).ready(function () {

    var currentURL = $(location).attr('href');
    var t_height = $('.time-table').css('height');
    $('.actAsDiv').css('height', t_height);

    setLinkActive(stripURL(currentURL));

    function stripURL($url) {
        var unusedPiece = $url.substr($url.lastIndexOf("?"));
        var file_name = $url.substr($url.lastIndexOf("/") + 1);
        var len = file_name.length - unusedPiece.length;
        if ($url.lastIndexOf("?") != -1) {
            file_name = file_name.substr(0, len);
        }

        return file_name;
    }

    function setLinkActive($url) {
        $("*.header__navigation a[href='" + $url + "']").parent('li').addClass('current-menu-item');
        var a_text = $("*.current-menu-item a[href='" + $url + "']").text();
        var p_statement = $('#ps').text();
        $('*#p_title').text(a_text);
        $('*#p_statement').text(p_statement);
        console.log($url);
    }
});
