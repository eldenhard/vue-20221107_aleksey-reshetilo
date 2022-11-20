import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: ['title', 'image'],
  template: `
    <div class="meetup-cover" :style="image && {'--bg-url': \`url(\${image})\`}">
      <!--  url('https://course-vue.javascript.ru/api/images/2')" -->
        <!-- Ссылка выше - пример верстки при наличии изображения, а не изображение по умолчанию. -->
        <!-- Изображение по умолчанию уже есть в стилях. Для его вывода достаточно не добавлять никаких стилей. -->
        <h1 class="meetup-cover__title">{{title}}</h1>
        <!-- <h1 class="meetup-cover__title">title</h1> -->

    </div>`,
});
