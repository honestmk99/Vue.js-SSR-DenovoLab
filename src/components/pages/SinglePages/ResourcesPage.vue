<template>
    <section class="container section-padding validate-padding resource">
        <h1 class="m-0 text-center resource-title">Resources</h1>
        <div class="resource-video">
            <div class="videos-card">
                <div class="d-flex justify-content-between">
                    <h2 class="m-0 font-3xl font-raleway text-primary">Useful videos</h2>
                    <div class="d-md-flex gap-32 align-items-center d-none">
                        <img :src="leftButton" alt="" />
                        <img :src="rightButton" alt="" />
                    </div>
                </div>
                <Flicking :options="{ gap: '16px', circular: true }">
                    <div key="slide1" class="panel">
                        <div class="video-card-item">
                            <div class="d-flex justify-content-around">
                                <div class="video-title">Placeholder text for video title</div>
                                <div class="export-icon"></div>
                            </div>
                            <div class="text-center">
                                <img class="video-image" :src="videoImage" alt="" />
                            </div>
                        </div>
                    </div>
                    <div key="slide2" class="panel">
                        <div class="video-card-item">
                            <div class="d-flex justify-content-around">
                                <div class="video-title">Placeholder text for video title</div>
                                <div class="export-icon"></div>
                            </div>
                            <div class="text-center">
                                <img class="video-image" :src="videoImage" alt="" />
                            </div>
                        </div>
                    </div>
                    <div key="slide3" class="panel">
                        <div class="video-card-item">
                            <div class="d-flex justify-content-around">
                                <div class="video-title">Placeholder text for video title</div>
                                <div class="export-icon"></div>
                            </div>
                            <div class="text-center">
                                <img class="video-image" :src="videoImage" alt="" />
                            </div>
                        </div>
                    </div>
                </Flicking>
            </div>
            <div class="d-flex flex-column gap-32 userful-document">
                <h2 class="resources-title m-0">Useful documents</h2>
                <div class="d-flex flex-column gap-16">
                    <h1 class="resourcesSubtitle m-0">
                        Organizations that support ACP consumers may use these resources to educate consumers about the
                        program and how to apply
                    </h1>
                    <ul class="download_list m-0">
                        <li>ACP Outreach Toolkit</li>
                        <li>ACP Outreach Toolkit</li>
                        <li>ACP Brochure (digital)</li>
                        <li>ACP Brochure (digital)</li>
                        <li>ACP Brochure (print)</li>
                        <li>ACP Brochure (print)</li>
                        <li>ACP Brochure (print)</li>
                        <li>ACP Flyer 1</li>
                        <li>ACP Flyer 1</li>
                        <li>Consumer Toolkit</li>
                        <li>Consumer Toolkit</li>
                    </ul>
                </div>
                <div class="d-flex flex-column gap-16">
                    <h1 class="resourcesSubtitle m-0">
                        You can find additional toolkit materials and partner resources, including materials in many
                        languages:
                    </h1>
                    <div class="language-download">
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                        <div class="download-line">Language name</div>
                    </div>
                </div>
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
            videoImage: require('../../../assets/images/icons/video.svg'),
            leftButton: require('../../../assets/images/icons/arrow-left.png'),
            rightButton: require('../../../assets/images/icons/arrow-right.png'),
        }
    },
}
</script>
<style>
.download-line {
    position: relative;
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-decoration: underline;
    text-underline-offset: 4px;
    color: #003875;
    display: list-item;
}

.userful-document {
    padding-left: 50px;
    padding-right: 50px;
}

.language-download {
    display: grid;
    grid-row-gap: 12px;
    grid-column-gap: 16px;
    grid-template-columns: repeat(6, 1fr);
    padding-left: 40px;
}

.download-line::marker {
    list-style-type: decimal;
    font-size: 16px;
    font-weight: bolder;
    display: list-item;
}

.download-line::after {
    position: absolute;
    content: '';
    background: url('../../../assets/images/icons/download.svg');
    width: 24px;
    height: 24px;
    margin-left: 12px;
}

.resource-video {
    display: flex;
    flex-direction: column;
    gap: 160px;
}

.resource-title {
    font-family: 'Raleway';
    font-size: 55px;
    font-weight: 600;
    line-height: 65px;
    color: #0f172a;
}

.resource {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.download_list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.download_list li {
    position: relative;
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #003875;
}

.download_list li:after {
    position: absolute;
    content: '';
    background: url('../../../assets/images/icons/download.svg');
    width: 24px;
    height: 24px;
    margin-left: 12px;
}

.download_list_horizontal {
    display: flex;
    gap: 16px;
}

.download_list_horizontal li {
    position: relative;
    min-width: 178px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-decoration-line: underline;
    color: #003875;
    display: inline-block;
}

.download_list_horizontal li:before {
    position: absolute;
    content: '\25CF';
    width: 6px;
    height: 6px;
    left: -18px;
}

.download_list_horizontal li:after {
    position: absolute;
    content: '';
    background: url('../../../assets/images/icons/download.svg');
    width: 24px;
    height: 24px;
    margin-left: 12px;
}

.resourcesSubtitle {
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    color: #0f172a;
}

.videos-card {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 8px 16px -4px rgba(0, 12, 32, 0.12);
    border-radius: 32px;
    padding: 32px 42px;
    gap: 32px;
}

.video-title {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    color: #0f172a;
    padding-bottom: 22px;
    width: 243px;
}

.video-image {
    width: 100%;
}

.video-card-item {
    background: #ffffff;
    box-shadow: 0px 8px 16px -4px rgba(0, 12, 32, 0.12);
    border-radius: 32px;
    padding: 32px 24px;
    margin-right: 30px;
}

.export-icon {
    width: 24px;
    height: 24px;
    background: url('../../../assets/images/icons/export.svg');
}

.resources-title {
    font-family: 'Raleway';
    font-size: 45px;
    font-weight: 600;
    line-height: 53px;
}

@media (max-width: 768px) {
    .video-card-item {
        padding: 32px 24px;
        width: 363px;
        height: 395px;
    }
    .flicking-camera {
        transform: none !important;
    }

    .resource {
        gap: 32px;
    }

    .resource-video {
        gap: 80px;
    }

    .language-download {
        grid-template-columns: repeat(3, 1fr);
        padding-left: 40px;
    }

    .userful-document {
        padding-left: 0px;
        padding-right: 0px;
    }
}

@media (max-width: 375px) {
    .videos-card-title > h2 {
        font-size: 30px;
        font-weight: 500;
        line-height: 35px;
    }
    .videos-card {
        padding: 32px 16px;
    }
    .resources-title {
        font-size: 30px;
        line-height: 35px;
        font-weight: 500;
    }
    .resourcesSubtitle {
        font-size: 20px;
        line-height: 23px;
    }
    .flicking-camera {
        transform: none !important;
    }
    .video-card-item {
        padding: 20px 16px;
        width: 300px;
        height: 365px;
    }
    .video-title {
        font-size: 20px;
        line-height: 23.48px;
        width: 162px;
    }
    .video-image {
        width: 268px;
        height: 251px;
    }

    .resource-video {
        gap: 60px;
    }

    .language-download {
        grid-template-columns: repeat(1, 1fr);
        padding-left: 40px;
    }
}
</style>
