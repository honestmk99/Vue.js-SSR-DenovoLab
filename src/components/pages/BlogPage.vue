<template>
    <section class="container validate-padding section-padding">
        <div class="blog-banner d-flex flex-column align-items-center justify-content-center gap-32">
            <h1 class="m-0 font-blog text-white text-raleway">April 09, 2022</h1>
            <h1 class="m-0 font-blog-banner text-white text-raleway text-center">
                Have you considered investing in a small business?
            </h1>
            <div class="ghost-btn white-color">Growth</div>
        </div>
        <div class="blog-content">
            <h1 class="m-0 text-center text-blog font-basic font-raleway">
                Outdoor living space is a luxury. It invites you to slow down, disconnect from the daily hustle, and
                tune into what matters — plus it adds to the size and value of your home.
            </h1>
            <div class="d-flex flex-column gap-32">
                <div class="d-flex flex-column gap-2">
                    <h1 class="font-basic-blog text-primary m-0 first-lettter">
                        Many homeowners have already taken the first step and invested in an outdoor living space
                        addition for these reasons. But what comes after that?
                    </h1>
                    <h1 class="font-basic-blog text-primary m-0">
                        A deck or patio doesn’t last forever. You have to make upgrades or improvements to your outdoor
                        living area for maintenance. Otherwise, it becomes overrun with cracks, weeds, peeling paint,
                        and more. Often, it’s prudent to completely remodel an outdoor living space; that way you can
                        tend to any foundational issues while sprucing up the cosmetics. At the same time, you can also
                        add new features like a built-in fireplace, grilling station, or bar. Know your outdoor living
                        area needs maintenance but having a hard time justifying the work? Here are four reasons to
                        remodel from ASPIRA VISION to make your decision a little easier.
                    </h1>
                </div>
                <div class="d-flex flex-column gap-16">
                    <h1 class="m-0 font-blog text-primary font-raleway">1. EXPAND & IMPROVE LIVING SPACE</h1>
                    <h1 class="m-0 text-primary font-raleway font-sm-blog">
                        The most obvious benefit of outdoor living rooms is more space. Having a second outdoor living
                        area allows you and your household to engage in a wide variety of activities together. You can
                        roast marshmallows, soak up the sunshine, breathe in the fresh air, and do any other number of
                        activities you simply can’t do indoors. However, if your outdoor living area has gotten old and
                        rundown, this valuable space is likely being used less and less. Your investment is wasting
                        away. But a remodel can fix that. A remodel gives you the opportunity to do repair or
                        maintenance work, like a decking renovation, while also allowing you to improve your space. One
                        improvement that really pays off is adding a roof if you don’t have one already. A roof can be
                        beneficial for all types of outdoor living areas. That’s particularly true for deck and patio
                        outdoor living spaces, which often don’t come with one. Homeowners with detached outdoor living
                        spaces might consider a covered walkway between the house and outdoor space. We also recommend
                        adding amenities that make members of your household more likely to utilize outdoor space.
                        Culinary enthusiasts should invest in an outdoor kitchen or grilling station, while those who
                        love to entertain can install a t.v., bar, and comfortable furniture.
                    </h1>
                </div>
                <div class="d-flex flex-column gap-16">
                    <h1 class="m-0 font-blog text-primary font-raleway">2. EXPAND & IMPROVE LIVING SPACE</h1>
                    <h1 class="m-0 text-primary font-raleway font-sm-blog">
                        The most obvious benefit of outdoor living rooms is more space. Having a second outdoor living
                        area allows you and your household to engage in a wide variety of activities together. You can
                        roast marshmallows, soak up the sunshine, breathe in the fresh air, and do any other number of
                        activities you simply can’t do indoors. However, if your outdoor living area has gotten old and
                        rundown, this valuable space is likely being used less and less. Your investment is wasting
                        away. But a remodel can fix that. A remodel gives you the opportunity to do repair or
                        maintenance work, like a decking renovation, while also allowing you to improve your space. One
                        improvement that really pays off is adding a roof if you don’t have one already. A roof can be
                        beneficial for all types of outdoor living areas. That’s particularly true for deck and patio
                        outdoor living spaces, which often don’t come with one. Homeowners with detached outdoor living
                        spaces might consider a covered walkway between the house and outdoor space. We also recommend
                        adding amenities that make members of your household more likely to utilize outdoor space.
                        Culinary enthusiasts should invest in an outdoor kitchen or grilling station, while those who
                        love to entertain can install a t.v., bar, and comfortable furniture.
                    </h1>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column blog-resource">
            <h3 class="m-0 font-xl font-raleway text-primary">Related resources</h3>
            <div class="w-100 overflow-x-scroll">
                <Flicking :options="{ gap: '32px', circular: true }">
                    <div key="slide1" class="w-100 blog-card d-flex flex-column gap-24">
                        <img class="blog-image" :src="blogImg" alt="" />
                        <div class="d-flex flex-column gap-12">
                            <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                            <h1 class="text-black font-raleway font-blog m-0">
                                How a visual artist redefines success in graphic design
                            </h1>
                            <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </h1>
                        </div>
                    </div>
                    <div key="slide2" class="w-100 blog-card d-flex flex-column gap-24">
                        <img class="blog-image" :src="blogImg" alt="" />
                        <div class="d-flex flex-column gap-12">
                            <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                            <h1 class="text-black font-raleway font-blog m-0">
                                How a visual artist redefines success in graphic design
                            </h1>
                            <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </h1>
                        </div>
                    </div>
                    <div key="slide3" class="w-100 blog-card d-flex flex-column gap-24">
                        <img class="blog-image" :src="blogImg" alt="" />
                        <div class="d-flex flex-column gap-12">
                            <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                            <h1 class="text-black font-raleway font-blog m-0">
                                How a visual artist redefines success in graphic design
                            </h1>
                            <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </h1>
                        </div>
                    </div>
                    <div key="slide4" class="w-100 blog-card d-flex flex-column gap-24">
                        <img class="blog-image" :src="blogImg" alt="" />
                        <div class="d-flex flex-column gap-12">
                            <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                            <h1 class="text-black font-raleway font-blog m-0">
                                How a visual artist redefines success in graphic design
                            </h1>
                            <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </h1>
                        </div>
                    </div>
                    <div key="slide5" class="w-100 blog-card d-flex flex-column gap-24">
                        <img class="blog-image" :src="blogImg" alt="" />
                        <div class="d-flex flex-column gap-12">
                            <h1 class="font-basic font-roboto text-primary m-0">Growth • April 09, 2022</h1>
                            <h1 class="text-black font-raleway font-blog m-0">
                                How a visual artist redefines success in graphic design
                            </h1>
                            <h1 class="font-basic text-sublabel m-0 blog-description three-dot">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </h1>
                        </div>
                    </div>
                </Flicking>
            </div>
        </div>
    </section>
</template>
<script>
import Flicking from '@egjs/vue3-flicking'
export default {
    components: {
        Flicking,
    },
    methods: {},
    data() {
        return {
            blogImg: require('../../assets/images/icons/blog.svg'),
        }
    },
}
</script>
<style>
.blog-banner {
    background-image: linear-gradient(#00000033, #00000033), linear-gradient(#00123480, #00123480),
        url('../../assets/images/pages/BlogPage/banner.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 32px;
    padding: 90px 234px;
    box-shadow: 0px 8px 16px -4px #000c2038;
}

.blog-last-section {
    display: flex;
    gap: 32px;
}

.blog-resource {
    gap: 32px;
}

.blog-content {
    padding: 42px 260px 52px;
    display: flex;
    flex-direction: column;
    gap: 42px;
}

.first-lettter:first-child::first-letter {
    font-family: 'Lato';
    font-size: 50px;
    font-weight: 500;
    line-height: 45px;
    letter-spacing: 0.05em;
    color: #212b2d;
    float: left;
}

.height-inherit {
    height: inherit;
}

@media (max-width: 768px) {
    .blog-banner {
        padding: 90px 0;
    }

    .blog-content {
        padding: 42px 0 52px;
        gap: 80px;
    }
}

@media (max-width: 375px) {
    .blog-image {
        width: 329px;
    }
    .header-box-size {
        width: 343px;
        height: 406px;
        margin-bottom: 24px;
    }

    .blog-content {
        padding: 24px 0 60px;
        gap: 24px;
    }

    .blog-resource {
        gap: 24px;
    }
}
@media (min-width: 667px) and (max-width: 768px) {
    .header-box-size {
        width: 688px;
        height: 395px;
    }
}
</style>
