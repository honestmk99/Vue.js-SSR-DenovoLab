<template>
    <section class="container section-padding validate-padding contact">
        <h1 class="font-raleway text-center font-4xl m-0">Get in touch with us</h1>
        <div class="contact-container">
            <div class="contact-side">
                <div class="side-image"></div>
                <div class="contact-form rounded-32 d-flex flex-column gap-32">
                    <div class="d-flex flex-column gap-32">
                        <h1 class="font-2xl font-raleway text-primary m-0">Fill in the fields below</h1>
                        <div class="d-flex flex-column gap-8">
                            <div class="name-form">
                                <label for=""
                                    >First name
                                    <input type="text" placeholder="Last name" class="text-placeholder" />
                                </label>
                                <label for="" class="text-label font-sm font-inter"
                                    >Last name
                                    <input type="text" placeholder="Last name" class="text-placeholder" />
                                </label>
                            </div>
                            <label for="" class="text-label font-sm font-inter"
                                >Email
                                <input type="email" placeholder="Email" class="text-placeholder" />
                            </label>
                            <label for="" class="text-label font-sm font-inter"
                                >Contact
                                <input type="text" placeholder="Contact" class="text-placeholder" />
                            </label>
                            <label for="" class="text-label font-sm font-inter"
                                >Subject
                                <select name="pets" id="pet-select">
                                    <option value="">--Please choose an option--</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="hamster">Hamster</option>
                                    <option value="parrot">Parrot</option>
                                    <option value="spider">Spider</option>
                                    <option value="goldfish">Goldfish</option>
                                </select>
                            </label>
                            <label for="" class="text-label font-sm font-inter"
                                >Message
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="20"
                                    rows="6"
                                    placeholder="Message"
                                ></textarea>
                            </label>
                        </div>
                    </div>
                    <div class="contact-button d-flex align-items-center justify-content-center">
                        <h1 class="m-0 font-basic-medium font-raleway">Send</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    components: {},
    methods: {},
    data() {
        return {
            contactBg: require('../../../assets/images/pages/ContactPage/image.jpg'),
        }
    },
}
</script>
<style>
@import '../../../assets/styles/components/contact.css';
</style>
