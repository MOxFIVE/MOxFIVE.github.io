define(function (){
    var valueHide = yiliaConfig.toc[0];
    var valueShow = yiliaConfig.toc[1];

    if ($(".left-col").is(":hidden")) {
        $("#tocButton").attr("value", valueShow);
    }

    $("#tocButton").click(function() {
        if ($("#toc").is(":hidden")) {
            $("#tocButton").attr("value", valueHide);
            $("#toc").slideDown(320);
            $(".switch-btn, .switch-area").fadeOut(300);
        }
        else {
            $("#tocButton").attr("value", valueShow);
            $("#toc").slideUp(350);
            $(".switch-btn, .switch-area").fadeIn(500);
        }
    })

    if ($(".toc").length < 1) {
        $("#toc, #tocButton").hide();
        $(".switch-btn, .switch-area").show();
    }


    var $titleHasChild = $("#toc .toc-item:has(> .toc-child) > .toc-link");
    var $tocTitle = $("#toc .toc-title");
    var $subToc = $titleHasChild.next(".toc-child");

    $("#toc .toc-item:has(> .toc-child)").prepend("<i class='fa fa-caret-down'></i><i class='fa fa-caret-right'></i>");

    var $toggleIcon = $("#toc .toc-item > i");
    var $iconToExpand = $(".toc-item > .fa-caret-right");
    var $iconToFold = $(".toc-item > .fa-caret-down");
    $iconToExpand.addClass("hide");

    $toggleIcon.click(function(){
        $(this).siblings(".toc-child").slideToggle(100);
        $(this).toggleClass("hide");
        $(this).siblings("i").toggleClass("hide");
    })

    $titleHasChild.dblclick(function(){
        $(this).siblings(".toc-child").hide(100);
        $(this).siblings("i").toggleClass("hide");
    })

    // After dblclick enent
    $titleHasChild.click(function(){
        var $curentTocChild = $(this).siblings(".toc-child");
        if ($curentTocChild.is(":hidden")) {
            $curentTocChild.show(100);
            $(this).siblings("i").toggleClass("hide");
        }
    })

    if ($titleHasChild.length) {
        $tocTitle.addClass("clickable");
        $tocTitle.click(function(){
            if ($subToc.is(":hidden")) {
                $subToc.show(150);
                $iconToExpand.removeClass("hide");
                $iconToFold.addClass("hide");
            } else {
                $subToc.hide(100);
                $iconToExpand.addClass("hide");
                $iconToFold.removeClass("hide");
            }
        })
        if ($(".left-col").is(":hidden")) {
            $("#container .toc-article .toc").css("padding-left", "1.4em");
            $("#container .toc-article .toc-title").css("display", "initial");
        }
    }

    // TOC Nowarp
    if (yiliaConfig.toc[2]) {
        var $tocLink = $(".toc li a");
        $tocLink.each(function(){
            var title = $(this).find('.toc-text').text();
            // Find element with ellipsis
            if (this.offsetWidth < this.scrollWidth) {
                $(this).attr("title", title);
                if (!!$().tooltip) { $(this).tooltip() }
            }
        })
    }

})
