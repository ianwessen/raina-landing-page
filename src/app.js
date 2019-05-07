import './style.scss';

$('.film-strip-frame').click(e => {
    console.log(e.currentTarget.dataset.photoId)
})

const computeFocusThreshold = () => $(window).height() / 3;

const updateFocus = () => {
    // $('.film-strip-frame').each((i,frame) => {
    //     const focusPoint = computeFocusThreshold();

    //     const distanceFromTop = $(frame).offset().top - $(window).scrollTop();

    //     if (distanceFromTop < focusPoint) {
    //         $(frame).addClass('is-in-focus');
    //     } else {
    //         $(frame).removeClass('is-in-focus');
    //     };
    // });
};

const updateFocusThrottled = _.throttle(updateFocus, 200);

$(window).scroll(updateFocusThrottled);