console.log('JS OK')

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

const app = new Vue(
    {
        el: '#app',
        data: {
            activeIndex: 0,
            slides,
            intervalId: undefined
        },

        mounted() {
            setInterval(this.showNext, 3000);
        },

        methods: {
            createInterval() {
                this.intervalId = setInterval(this.showNext, 3000);
            },
            stopInterval() {
                if (this.intervalId) {
                    clearInterval(this.intervalId);
                }
            },

            showPrev: function () {
                if (this.activeIndex > 0) {
                    this.activeIndex--;
                } else {
                    this.activeIndex = this.activeIndex.lenght - 1;
                }
            },
            showNext: function () {
                if (this.activeIndex === this.activeIndex.lenght - 1) {
                    this.activeIndex = 0;
                } else {
                    this.activeIndex++;
                }
            },
            onNextClick() {
                this.showNext();
                this.stopInterval();
                this.createInterval();
            },
            onPrevClick() {
                this.showPrev();
                this.stopInterval();
                this.createInterval();
            },

            selectImage(newActiveIndex) {
                this.activeIndex = newActiveIndex;
            }
        }
    }
);



