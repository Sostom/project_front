<template>
    <div class="contact-area area-padding">
        <div class="container">
            <div class="contact-inner row">
                <div class="col-md-4 ">
                    <div class="contact-icon text-center">
                        <div class="single-icon">
                            <i class="ti-mobile"></i>
                            <p>
                                Appel : (+229) 01 69 43 61 01<br />
                                <span>Lundi - Dimanche (8h00 - 22h00)</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="contact-icon text-center">
                        <div class="single-icon">
                            <i class="ti-email"></i>
                            <p>
                                Email : mimob.contact@gmail.com<br />
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="contact-icon text-center">
                        <div class="single-icon">
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            <p>
                                Web: <br> www.mimob.bj
                                <!-- <span>Menlo Park, CA, United States</span> -->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <form
                id="contactForm"
                method="POST"
                action="#"
                class="contact-form"
            >
                <h3>Laissez nous un message</h3>
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="col-md-12 col-sm-6 col-xs-12">
                            <input
                                type="text"
                                id="name"
                                class="form-control"
                                placeholder="Nom"
                                required
                                data-error="Entrez votre nom"
                            />
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="col-md-12 col-sm-6 col-xs-12">
                            <input
                                type="email"
                                class="email form-control"
                                id="email"
                                placeholder="Email"
                                required
                                data-error="Entrez votre email"
                            />
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <input
                                type="text"
                                id="msg_subject"
                                class="form-control"
                                placeholder="Objet"
                                required
                                data-error="Entrez l'objet du message"
                            />
                            <div class="help-block with-errors"></div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="">
                            <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <textarea
                                            id="message"
                                            rows="7"
                                            placeholder="Message"
                                            class="form-control"
                                            required
                                            data-error="Ecrivez votre message"
                                        ></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-md-12 col-sm-12 col-xs-12 text-center"
                >
                    <button
                        type="submit"
                        id="submit"
                        class="add-btn contact-btn"
                    >
                        Envoyer message
                    </button>
                    <div
                        id="msgSubmit"
                        class="h3 text-center hidden"
                    ></div>
                    <div class="clearfix"></div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactDetails",
};
</script>

<style scoped>
</style>
