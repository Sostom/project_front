<template>
    <div class="blog-area-admin fix area-padding-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="single-well-admin mar-well">
                                <a href="#">
                                    <h3>Espace Propriétaire</h3>
                                </a>
                                <p>
                                    Vous trouverez ici toutes les propriétes que vous avez ajouté. </br>
                                    Plusieurs modifications sont possibles. Vous pouvez ajoutez de nouvelles 
                                    photos aux propriétés ou désactiver des propriétés qui ont été libéré à défaut 
                                    de leur suppression. Vous pouvez également modifier des informations relatives 
                                    aux propriétés déjà ajoutées. 
                                </p>
                            </div>
                </div>
            </div>
            <div class="button-ajout">
                <NuxtLink to="/proprio/propriete/add"><button class="custom-btn btn-3"><span><i class="fa fa-plus-circle error_info" aria-hidden="true"></i> NOUVEAU</span></button></NuxtLink>
            </div>
            <div class="div_filtre">
                <div class="filtre_ville">
                    <v-select @input="search()" placeholder="Ville" class="select_ville" v-model="sort_by_ville" label="name" :options="villes"
                        :reduce="(ville) => ville.id" append-to-body />
                </div>
                
                <div class="filtre_feature">
                    <select class="form-control" v-model="sort_by_feature"  @change="search()">
                    <option disabled value="">Chambre</option>
                    <option value="01 chambre salon">01 chambre salon</option>
                    <option value="02 chambres salon">02 chambres salon</option>
                    <option value="03 chambres salon">03 chambres salon</option>
                    <option value="04 chambres salon">04 chambres salon</option>
                    </select>
                </div>

                <div class="filtre_loyer">
                    <select class="form-control" v-model="sort_by_price" required @change="search()">
                        <option value="">Loyer</option>
                        <option value="is_sort_by_price_desc">Prix en ordre décroissant</option>
                        <option value="is_sort_by_price_asc">Prix en ordre croissant</option>
                    </select>
                </div>

            </div>
            <div class="row">
                <div class="blog-grid home-blog" >
                    <div class="col-md-4 col-sm-6 col-xs-12" v-for="(propriete, v) in proprietes" :key="v">
                        <div class="single-blog">
                            <div class="blog-image">
                                <a class="image-scale" href="#">
                                    <img :src="'http://localhost:8000/'+propriete.propriete_pictures[0].picture.path" alt="" v-if="propriete.propriete_pictures.length > 0 "/>
                                    <img src="/img/no-img.png" alt="" v-else-if="propriete.propriete_pictures.length == 0 ">
                                    <!-- <img src="/img/blog/b1.jpg" alt=""> -->
                                </a>
                                <p class="propriete_loyer">
                                    {{propriete.loyer}} F
                                </p>

                                <!-- <p class="propriete_type">
                                    {{propriete.type}}
                                </p> -->
                            </div>

                            <div class="blog-content">
                                <div class="blog-meta row">
                                    <span class="admin-type col-md-4">
                                        <i class="fa fa-home "></i>
                                        {{propriete.type}}
                                    </span>
                                    <span class="date-type col-md-4">
                                        <i class="fa fa-map-marker"></i>
                                        {{propriete.ville.name}}
                                    </span>
                                    <span class="comments-type col-md-4">
                                        <i class="fa fa-handshake-o"></i>
                                        {{propriete.caution_type}}
                                    </span>
                                </div>
                                <a href="#">
                                    <p class="propriete_features">
                                        {{ propriete.feature }}
                                    </p>
                                </a>
                            </div>
                            <div class="propriete-actions text-center">
                                <p>Actions</p>
                                <ul class="social-icon">
                                    <NuxtLink :to="'/proprio/propriete/voir/'+propriete.id"><li><a class="facebook" href=""><i class="fa fa-search-plus" aria-hidden="true"></i></a></li></NuxtLink>
                                    <NuxtLink :to="'/proprio/propriete/edit/'+propriete.id"><li><a class="twitter" href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li></NuxtLink>
                                    <li><a class="instagram" href="#delete-modal" @click="chargeId(propriete.id)"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12 col-xs-12 text-center"  v-if="contents != null ">
                        <hr>
                        <p class="text-center" v-if="contents.total > 1">{{ contents.total }} propriétés ajoutées</p>
                        <p class="text-center" v-else>{{ contents.total }} propriété ajoutée</p>
                        <hr>
                        <div class="blog-pagination">
                            <ul class="pagination">
                                <li :class="(contents.prev_page_url == null)? 'page-item disabled':'page-item'"><a class="page-link" @click="getProprietes(contents.current_page - 1)">Précédent</a></li>
                                <li :class="(link.active === true)? 'page-link active':'page-link'" v-for="(link, index) in contents.links" :key="index"><a  href="#" @click="getProprietes(link.label)">{{link.label}}</a></li>
                                <li :class="(contents.next_page_url == null)? 'page-item disabled':'page-item'"><a class="page-link" @click="getProprietes(contents.current_page + 1)">Suivant</a></li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="delete-modal" class="modal">
                <div class="modal__content">
                    <div class="error_modal" v-if="error_modal">
                        <i class="fa fa-exclamation-triangle error_info" aria-hidden="true"></i> {{ error_modal }}
                    </div>
                    <div class="success_modal" v-if="success_modal">
                    <i class="fa fa-check-square-o error_info" aria-hidden="true"></i> {{ success_modal }}
                    </div>
                    <div class="cache" v-if="success_modal !='Propriété supprimée avec succès !!!'">
                        <h6>Voudriez vous supprimer cette propriété ? </h6><p><span class="obligatoire">*</span>Cette action est irréversible !</p>
                        <div class="col-md-12 confirm">
                            <div class="col-md-6"><button :class="{ 'btn-loading-admin': loading }" class="custom-btn btn-300"  @click.prevent="deletePropriete()">OUI<span v-if="loading" class="spinner-admin"></span></button></div>
                            <div class="col-md-6"><a href="#"><button class="custom-btn btn-30"><span>NON</span></button></a></div>
                        </div>
                    </div>
                    <a href="#" class="modal__close" @click="closeModal()">&times;</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    name: "GetPropriete",
    components: {
        vSelect
    },
    
    data() {
        return {
            loading: false, 
            proprietes: [],
            errors: [],
            error: null,
            contents: null,
            villes: [],
            quartiers: [],
            selectedVille: null,
            sort_by_feature: "",
            sort_by_price: '',
            error_modal: null,
            success_modal: null,
            proprieteId: null,
            sort_by_feature: "",
            sort_by_price: "",
            sort_by_ville: "",
        };
    },
    mounted() {
          this.getProprietes();
          this.getVilles();
    },

    methods: {

        search(page=1) { 
            this.$axios.get('/search/proprietes',{
                params: {
                    sort_by_ville: this.sort_by_ville,
                    sort_by_feature: this.sort_by_feature,
                    sort_by_price: this.sort_by_price,
                    user_id: this.$auth.user.id,
                    per_page: 18,
                    page: page,
                }
            })
            .then(response =>{
            //   console.log(response);
                this.proprietes = response.data.data.data
                this.contents = response.data.data
                let firstE = response.data.data.links.shift()
                let lastE = response.data.data.links.splice(-1,1);
            })
        },

        getVilles(){
            this.$axios.get('/villes')
            .then(response =>{
                // console.log(response.data.data);
                this.villes = response.data.data
            })
        },

        closeModal() {
            this.selectedFile = null;
            this.success_modal = null;
            this.error_modal = null;
            const currentUrl = window.location.href.split("#")[0];
            window.history.replaceState(null, null, currentUrl);
        },

        chargeId(id){
            this.proprieteId = id
        },

        deletePropriete(){
          this.loading = true; 
          this.$axios.delete('/proprietes/'+ this.proprieteId)
            .then(response => {
                this.loading = false; 
                console.log(response)
                if(response.data.status == "success"){
                    this.getProprietes();
                    this.error_modal = null
                    this.success_modal = "Propriété supprimée avec succès !!!"

                }
                else{
                    this.error_modal = response.data.message
                }
            }
            ) 
        },

        refresh_all(){
            this.getProprietes()
        },


        getProprietes(page=1) { 
            this.$axios.get('/proprietes',{
                params: {
                    user_id: this.$auth.user.id,
                    per_page: 9,
                    page: page,
                }
            })
            .then(response =>{
            //   console.log(response);
                this.proprietes = response.data.data.data
                this.contents = response.data.data
                let firstE = response.data.data.links.shift()
                let lastE = response.data.data.links.splice(-1,1);
            })
        },
    }

};
</script>

<style scoped>
</style>
