(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//modal
let open=false;
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
      open=false;
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    $trigger.addEventListener('click', () => {
      openModal($target);
      open=true;

    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
//dashboard
var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');


var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November','December' ],
    datasets: [{
            label: 'Applications',
            backgroundColor: gradient,
            pointBackgroundColor: '#00c7d6',
            borderWidth: 1,
            borderColor: '#0e1a2f',
            data: [60, 45, 80, 30, 35, 55,25,80,40,50,80,50]
    }]
};

var options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
        easing: 'easeInOutQuad',
        duration: 520
    },
    scales: {
        yAxes: [{
      ticks: {
        fontColor: '#5e6a81'
      },
            gridLines: {
                color: 'rgba(200, 200, 200, 0.08)',
                lineWidth: 1
            }
        }],
    xAxes:[{
      ticks: {
        fontColor: '#5e6a81'
      }
    }]
    },
    elements: {
        line: {
            tension: 0.4
        }
    },
    legend: {
        display: false
    },
    point: {
        backgroundColor: '#00c7d6'
    },
    tooltips: {
        titleFontFamily: 'Poppins',
        backgroundColor: 'rgba(0,0,0,0.4)',
        titleFontColor: 'white',
        caretSize: 5,
        cornerRadius: 2,
        xPadding: 10,
        yPadding: 10
    }
};

var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
        options: options
});

document.querySelector('.open-right-area').addEventListener('click', function () {
    document.querySelector('.app-right').classList.add('show');
});

document.querySelector('.close-right').addEventListener('click', function () {
    document.querySelector('.app-right').classList.remove('show');
});

document.querySelector('.menu-button').addEventListener('click', function () {
    document.querySelector('.app-left').classList.add('show');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.app-left').classList.remove('show');
});