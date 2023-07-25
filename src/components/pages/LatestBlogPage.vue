<template>
    <section class="container validate-padding last-blog d-flex flex-column justify-content-center gap-42">
        <div class="blog d-flex flex-column justify-content-center">
            <div class="d-flex flex-column blog-title justify-content-center align-items-center">
                <h1 class="m-0 font-4xl font-raleway text-primary text-center text-nowrap">Latest from our Blog</h1>
                <h1 class="m-0 font-raleway text-sublabel blog-subtitle text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </h1>
            </div>
            <div class="blog-section">
                <div class="w-100 d-flex flex-column gap-24">
                    <img class="blog-image" :src="blogImg" alt="" />
                    <div class="d-flex flex-column gap-12">
                        <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                        <h1 class="text-black font-raleway font-blog m-0">
                            How a visual artist redefines success in graphic design
                        </h1>
                        <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat
                        </h1>
                    </div>
                </div>
                <div class="w-100 d-flex flex-column gap-24">
                    <img class="blog-image" :src="blogImg" alt="" />
                    <div class="d-flex flex-column gap-12">
                        <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                        <h1 class="text-black font-raleway font-blog m-0">
                            How a visual artist redefines success in graphic design
                        </h1>
                        <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat
                        </h1>
                    </div>
                </div>
                <div class="w-100 d-flex flex-column gap-24">
                    <img class="blog-image" :src="blogImg" alt="" />
                    <div class="d-flex flex-column gap-12">
                        <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                        <h1 class="text-black font-raleway font-blog m-0">
                            How a visual artist redefines success in graphic design
                        </h1>
                        <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat
                        </h1>
                    </div>
                </div>
                <div class="w-100 d-flex flex-column gap-24">
                    <img class="blog-image" :src="blogImg" alt="" />
                    <div class="d-flex flex-column gap-12">
                        <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                        <h1 class="text-black font-raleway font-blog m-0">
                            How a visual artist redefines success in graphic design
                        </h1>
                        <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat
                        </h1>
                    </div>
                </div>
                <div class="w-100 d-flex flex-column gap-24">
                    <img class="blog-image" :src="blogImg" alt="" />
                    <div class="d-flex flex-column gap-12">
                        <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                        <h1 class="text-black font-raleway font-blog m-0">
                            How a visual artist redefines success in graphic design
                        </h1>
                        <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat
                        </h1>
                    </div>
                </div>
                <div class="w-100 d-flex flex-column gap-24">
                    <img class="blog-image" :src="blogImg" alt="" />
                    <div class="d-flex flex-column gap-12">
                        <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                        <h1 class="text-black font-raleway font-blog m-0">
                            How a visual artist redefines success in graphic design
                        </h1>
                        <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-auto text-secondary px-24 py-12 blog-button">
            <div>Show 9 more</div>
        </div>
    </section>
</template>
<script>
export default {
    components: {},
    methods: {},
    data() {
        return {
            blogImg: require('../../assets/images/pages/lastBlog/blog.jpg'),
        }
    },
}
</script>
<style>
.blog-card {
    width: 410px !important;
}

.blog-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.blog-description {
    max-height: 69px;
    padding-right: 0.6rem;
    overflow: hidden;
}

.three-dot {
    position: relative;
}

.three-dot::after {
    position: absolute;
    content: '...';
    bottom: 0;
    right: 0.3rem;
}

.blog-image {
    width: 100%;
    height: 250px;
    border-radius: 32px;
    object-fit: cover;
}

.blog-button {
    box-shadow: 0 0 0 1px inset #003875;
    border-radius: 8px;
}

@media (max-width: 768px) {
    /* .blog-card {
        width: 329px;
    } */
    .blog-image {
        height: 250px;
    }
    .blog-section {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    .last-blog {
        padding-right: 0;
        padding-left: 0;
    }
}
@media (max-width: 376px) {
    /* .blog-image {
        width: 329px;
        border-radius: 24px;
        object-fit: none;
        height: 250px;
    } */

    .last-blog {
        padding-right: 23px;
        padding-left: 23px;
    }

    .blog-section {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
