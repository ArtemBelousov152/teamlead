import { tns } from "tiny-slider";
import watch from "./modules/watch";
import showAnimate from "./modules/showAnimate";

window.addEventListener("DOMContentLoaded", () => {
    const slider = tns({
        container: '.reviews__slider',
        items: 1,
        slideBy: 'page',
        nav: true,
        controls: false,
        navPosition: "bottom",
        responsive: {
            769: {
                nav: false
            }
        }
    });
    
    document.querySelector(".reviews__arrow-left").addEventListener('click',() => {
        slider.goTo('prev');
    })
    document.querySelector(".reviews__arrow-right").addEventListener('click',() => {
        slider.goTo('next');
    })

    showAnimate('.composition__item', 'composition__item-show')

    function hideOrderBtn() {
        if (document.documentElement.clientWidth <= 768) {
            document.querySelector('.promo__btn').classList.add('btn__hide');
        } else {
            document.querySelector('.promo__btn').classList.remove('btn__hide');
        }
    }
    hideOrderBtn()
    // Исчезновение кнопки сделать заказ при достижении конца страницы
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollHeight - document.documentElement.scrollTop < 1400) {
            console.log(1)
            document.querySelector('.promo__btn').classList.add('btn__hide');
        } else {
            hideOrderBtn()
        }
    })

    document.querySelector('.order__form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.reset();

    })
    // Появление и исчезновение подсказок к имени в форме
    document.querySelector('.order__form-name').addEventListener('focusin', () => {
        document.querySelector('[data-helpName]').style.opacity = 1;
    })
    document.querySelector('.order__form-name').addEventListener('focusout', () => {
        document.querySelector('[data-helpName]').style.opacity = 0;
    })
    
    // Появление и исчезновение подсказок к телефону в форме
    document.querySelector('.order__form-phone').addEventListener('focusin', () => {
        document.querySelector('[data-helpPhone]').style.opacity = 1;
    })
    document.querySelector('.order__form-phone').addEventListener('focusout', () => {
        document.querySelector('[data-helpPhone]').style.opacity = 0;
    })
    
    watch({
        hoursSelector: '#hour',
        minuteSelector: '#minute',
        secondSelector: '#second'
    })
})