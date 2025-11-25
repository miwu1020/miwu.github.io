// 1. 切换图片功能
const changeImgBtn = document.getElementById('change-img');
const showImg = document.getElementById('show-img');

changeImgBtn.addEventListener('click', () => {
    // 生成随机数，切换不同图片（picsum.photos 是免费图片接口）
    const randomNum = Math.floor(Math.random() * 100); // 0-99 随机数
    showImg.src = `https://picsum.photos/800/500?random=${randomNum}`;
});

// 2. 跳转到第二页（先创建 page2.html，这里先写跳转逻辑）
const goPage2Btn = document.getElementById('go-page2');

goPage2Btn.addEventListener('click', () => {
    // 跳转到同目录下的 page2.html（下面会给 page2 的简易代码）
    window.location.href = 'page2.html';
});

// 3. 回到顶部功能
const goTopBtn = document.getElementById('go-top');

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});
