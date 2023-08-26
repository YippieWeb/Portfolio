/* hamburger menu */
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/* typewriter effect with alterating text */
var typed = new Typed(".auto-type", {
    strings: ["Web Developer.", "Computer Science student.", "Problem Solver.", "Rock Climber."],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
})

/* scroll spy */ 
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    // when a section enters or exits the viewport
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // get the corresponding nav link and set it as active
                const activeLink = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    // add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // remove active class from all links
            navLinks.forEach(lnk => lnk.classList.remove('active'));

            // add active class to the clicked link
            link.classList.add('active');
        });
    });

    // create the IntersectionObserver
    const options = {
        threshold: 0.7 // 70% of the section is in view
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    // observe all sections
    sections.forEach(section => observer.observe(section));
});


/* leadership vertical tabs */
$(document).on("click", ".v-tabs .menu div", function() {
    var numberIndex = $(this).index();
    
    if (!$(this).hasClass("active")) {
        $(".v-tabs .menu div").removeClass("active");
        $(".v-tabs ul li").removeClass("active");

        $(this).addClass("active");
        $(".v-tabs ul").find("li:eq(" + numberIndex + ")").addClass("active");
        
        if ($(window).width() > 768) {  // only adjust height for larger screens
            var listItemHeight = $(".v-tabs ul")
                .find("li:eq(" + numberIndex + ")")
                .innerHeight();
            $(".v-tabs ul").height(listItemHeight + "px");
        }
    }
});

/* fade in on scroll */
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in'); // target all "fade-in" sections

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // get the position of the section relative to the viewport
        const sectionBottom = section.getBoundingClientRect().bottom; // get the position of the section's bottom relative to the viewport
        const windowHeight = window.innerHeight;

        // check if ANY part of the section is in the viewport
        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
});


/* vertical animated timeline */
(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);
  