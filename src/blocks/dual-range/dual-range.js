import noUiSlider from "nouislider";
const dualRange = document.querySelector('.dual-range');
const slider = dualRange.querySelector('.slider');
noUiSlider.create(slider, {
    start: [0, 50000],
    connect: true,
    range: {
        'min': 0,
        'max': 20000,
    },
    step: 100
})
const from = dualRange.querySelector('.from');
const to = dualRange.querySelector('.to');
slider.noUiSlider.on('update', function (values) {
    from.textContent = values[0] + '₽';
    to.textContent = values[1] + '₽';
});


