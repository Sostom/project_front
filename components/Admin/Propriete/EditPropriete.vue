<template>
  <div class="about-area-admin area-padding-2 fix">
    <div class="container">
      <div class="single-well-admin mar-well">
          <a href="#">
              <h3>Espace Propriétaire</h3>
          </a>
          <p>
              Modifier une propriété.
          </p>
      </div>

        <div class="error_message-admin" v-if="error">
          <i class="fa fa-exclamation-triangle error_info" aria-hidden="true"></i> {{ error }}
        </div>
      <div class="row ajout-form-admin">
        <h6 class="text-center titre_ajout">MODIFICATION DE PROPRIETE</h6 class="text-center"><hr>
        <form class="p-5" enctype="multipart/form-data">
              <div class="col-md-6 bloc-input">
                <label>Type <span class="obligatoire">*</span></label>
                <select class="form-control" v-model="form.type">
                  <option disabled value="">Choisissez...</option>
                  <option value="Sanitaire">Sanitaire</option>
                  <option value="Ordinaire">Ordinaire</option>
                </select>
              </div>
              <div class="col-md-6 bloc-input">
                <label>Chambre Salon<span class="obligatoire">*</span></label>
                <select class="form-control" v-model="form.feature">
                  <option disabled value="">Choisissez...</option>
                  <option value="01 chambre salon">01 chambre salon</option>
                  <option value="02 chambres salon">02 chambres salon</option>
                  <option value="03 chambres salon">03 chambres salon</option>
                  <option value="04 chambres salon">04 chambres salon</option>
                </select>
              </div>
              <div class=" col-md-6 bloc-input">
                  <label>Ville<span class="obligatoire">*</span></label>
                  <v-select
                    @input="updateSelectedVille"
                    placeholder="Saisissez la ville"
                    v-model="form.ville_id"
                    label="name"
                    :options="villes"
                    :reduce="(ville) => ville.id"
                    append-to-body
                  >
                    <!-- Bouton d'ajout si la ville est nouvelle -->
                    <template #no-options="{ search }">
                      <div class="add-option">
                        <span>Aucune ville trouvée pour "{{ search }}"</span>
                        <button @click="addVille(search)" class="btn-add">
                          Ajouter "{{ search }}"
                        </button>
                      </div>
                    </template>
                  </v-select>
                  <div class="error_type" v-if="error && errors.ville_id">
                    <i class="fa fa-info-circle error_info" aria-hidden="true"></i> Vous devez choisir la ville
                  </div>
              </div>
              <div class="col-md-6 bloc-input" v-if="selectedVille">
                  <label>Quartier </label>
                  <v-select
                    @input="updateSelectedQuartier"
                    placeholder="Saisissez le quartier"
                    v-model="form.quartier_id"
                    label="name"
                    :options="selectedVille.quartiers"
                    :reduce="(quartier) => quartier.id"
                    append-to-body
                  >
                    <!-- Bouton d'ajout si la ville est nouvelle -->
                    <template #no-options="{ search }">
                      <div class="add-option">
                        <span>Aucun quartier trouvé pour "{{ search }}"</span>
                        <button @click="addQuartier(search)" class="btn-add">
                          Ajouter "{{ search }}"
                        </button>
                      </div>
                    </template>
                  </v-select>
              </div>
              <div class="col-md-8 div-info_sup">
                  <label>Ecrivez une précision sur la zone</label>
                  <textarea
                      v-model="form.indication"
                      autocomplete="off"
                      type="textarea"
                      class="form-control"
                      placeholder="Saississez une indication de la zone"
                      cols="30"
                      rows="3"
                  ></textarea>
              </div>
              <div class=" col-md-6 bloc-input">
                <label>Ajoutez le nombre d'habitation<span class="obligatoire">*</span></label>
                <input
                    v-model="form.nbre_habitation"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre d'habitation"
                />
              </div>
              <div class="col-md-6 bloc-input">
                <label class="title">Compteur Personnel</label>
                <select class="form-control" v-model="form.compteur">
                  <option disabled value="">Choisissez...</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              <!-- <div class="col-md-6 bloc-input">
                <label>Ajoutez le nombre de salon</label>
                <input
                    v-model="form.nbre_salon"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre de salon"
                />
              </div>
              <div class="col-md-6 bloc-input">
                <label>Ajoutez le nombre de chambre</label>
                <input
                    v-model="form.nbre_chambre"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre de chambre"
                />
              </div> -->
              <div class="col-md-6 bloc-input">
                <label>Ajoutez le nombre de cuisine<span class="obligatoire">*</span></label>
                <input
                    v-model="form.nbre_cuisine"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre de cuisine"
                />
              </div>
              <div class="col-md-6 bloc-input">
                <label>Ajoutez le nombre de douche<span class="obligatoire">*</span></label>
                <input
                    v-model="form.nbre_douche"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre de douche"
                />
              </div>
              <div class="col-md-6 bloc-input">
                <label>Ajoutez le loyer<span class="obligatoire">*</span></label>
                <input
                    v-model="form.loyer"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le montant du loyer"
                />
              </div>
              <div class="col-md-6 bloc-input">
                <label>Type de caution<span class="obligatoire">*</span></label>
                <select class="form-control" placeholder="" v-model="form.caution_type">
                  <option disabled value="">Choisissez...</option>
                  <option value="Aucun">Aucun</option>
                  <option value="Sur négociation">Sur négociation</option>
                  <option value="1-1-1">1-1-1</option>
                  <option value="2-1-1">2-1-1</option>
                  <option value="3-1-1">3-1-1</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div class="col-md-6 bloc-input">
                <label>Ajoutez le montant de la caution eau et électricité<span class="obligatoire">*</span></label>
                <input
                    v-model="form.caution_eau_electricite"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le le montant de la caution"
                />
              </div>

              <div class="col-md-6 bloc-input">
                <label class="title">Accès véhicule</label>
                <select class="form-control" v-model="form.garage">
                  <option disabled value="">Choisissez...</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>

              <div class="col-md-8 m-auto div-info_sup">
                <label>Saisissez des informations supplémentaires</label>
                <textarea
                    v-model="form.autres"
                    autocomplete="off"
                    type="textarea"
                    class="form-control"
                    placeholder="Entrer autres"
                    cols="30"
                    rows="5"
                ></textarea>
              </div>

              
              <!-- <div class="edit-list-image" v-for="(image, v) in images" :key="v">
                  <div class="single-blog">
                      <div class="blog-image">
                          <a class="image-scale" href="#">
                              <img src="/img/blog/b1.jpg" alt="">
                          </a>
                      </div>

                      <div class="propriete-actions text-center">
                          <p>Actions</p>
                          <ul class="social-icon">
                              <li><a class="facebook" href=""><i class="fa fa-search-plus" aria-hidden="true"></i></a></li>
                              <NuxtLink :to="'/proprio/propriete/edit/'+image.id"><li><a class="twitter" href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li></NuxtLink>
                              <li><a class="instagram" href=""><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div> -->

              <!-- <div class="col-md-8 bloc-input div-info_sup">
                <label>Ajoutez une nouvelle image <span class="obligatoire">*</span></label>
                <input type="file" @change="handleFileUpload" size="150" name="file" ref="file" class="input_file_style_file" multiple /> <br><br><br>            
              </div> -->

              <div class="col-md-12">
                <button :class="{ 'btn-loading-admin': loading }" type="submit" class="custom-btn btn-05" @click.prevent="submit()">Enregistrer <span v-if="loading" class="spinner-admin"></span></button>
              </div>
              
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
    export default {
        name: "EditPropriete",
        components: {
          vSelect
        },
        data() {
          return {
            loading: false, 
            form: {
              id: '',
              type: "",
              ville_id: "",
              quartier_id: "",
              feature:'',
              indication: "",
              nbre_habitation: "",
              nbre_salon: 1,
              nbre_chambre: "",
              nbre_cuisine: 1,
              nbre_douche: 1,
              loyer: "",
              compteur: '',
              caution_type: "",
              caution_eau_electricite: "",
              autres: "",
              garage: "",
              statut: "disponible",
              user_id: 1,
              image: ""

            },
            villes: [],
            quartiers: [],
            caution_types: [],
            errors: [],
            error: null,
            selectedFile: null,
            selectedVille: null,
            propriete_id: null,
            images: []

          };
        },

              
        mounted() {
          this.getVilles();
          this.recupPropriete()
        },

        methods: {

          addVille(search){
            this.$axios.post('/villes',{
              name: search,
            })
            .then(response =>{
              // console.log(response);
              if(response.data.status == 'success'){
                this.getVilles()
              }
              else{
                this.error = response.data.message
              }
            })
          },

          addQuartier(search){
            
            this.$axios.post('/quartiers',{
              name: search,
              ville_id: this.form.ville_id
            })
            .then(response =>{
              // console.log(response.data);
              if(response.data.message== 'Quartier créé avec succès'){
                const newQuartier = response.data.data; // Le quartier ajouté (assure-toi que l'API retourne le quartier créé)

                // Trouver la ville sélectionnée et mettre à jour ses quartiers
                const ville = this.villes.find((v) => v.id === this.form.ville_id);
                if (ville) {
                  if (!ville.quartiers) {
                    ville.quartiers = [];
                  }
                  ville.quartiers.push(newQuartier);
                }

                // Mettre à jour `selectedVille` dynamiquement
                this.selectedVille = ville;
              }else{
                this.error = "Erreur! Veuillez réerssayer."
              }
            })
          },
          
          updateSelectedQuartier() {
              // this.selectedVille = this.villes.find(ville => ville.id === this.form.ville_id);
              // console.log(this.selectedQuartier);
              
          },

          recupPropriete(){
            this.$axios.get('/proprietes/'+ this.$route.params.id,{
                params: {
                    user_id: this.$auth.user.id
                }
            })
            .then(response =>{
              console.log(response);
              let propriete = response.data.data.propriete
              this.form.id = propriete.id
              this.form.type = propriete.type
              this.form.feature = propriete.feature
              this.form.ville_id = propriete.ville_id;
              this.form.quartier_id = propriete.quartier_id
              this.form.indication = propriete.indication
              this.form.nbre_habitation = propriete.nbre_habitation
              this.form.nbre_salon = propriete.nbre_salon
              this.form.nbre_chambre = propriete.nbre_chambre
              this.form.nbre_cuisine = propriete.nbre_cuisine
              this.form.nbre_douche = propriete.nbre_douche
              this.form.loyer = propriete.loyer
              this.form.compteur = propriete.compteur
              this.form.caution_type = propriete.caution_type
              this.form.caution_eau_electricite = propriete.caution_eau_electricite
              this.form.autres = propriete.autres
              this.form.garage = propriete.garage
              this.form.statut = propriete.statut
              this.images = propriete.propriete_pictures
              this.updateSelectedVille()
            })
          },
          
          updateSelectedVille() {
              this.selectedVille = this.villes.find(ville => ville.id === this.form.ville_id);
          },

          handleFileUpload(event){
            this.selectedFile = event.target.files[0]
            // console.log(this.selectedFile)
          },


          getVilles(){
            this.$axios.get('/villes')
            .then(response =>{
              // console.log(response.data.data);
                this.villes = response.data.data
                this.quartiers = response.data.data
            })
          },

          
        async submit(){
              this.loading = true; 
            await this.$axios.put('/proprietes/'+this.$route.params.id, {
              id: this.$route.params.id,
              type: this.form.type,
              ville_id: this.form.ville_id,
              feature: this.form.feature,
              quartier_id: this.form.quartier_id,
              indication: this.form.indication,
              nbre_habitation: this.form.nbre_habitation,
              nbre_cuisine: this.form.nbre_cuisine,
              nbre_douche: this.form.nbre_douche,
              loyer: this.form.loyer,
              caution_type: this.form.caution_type,
              compteur: this.form.compteur,
              garage: this.form.garage,
              caution_eau_electricite: this.form.caution_eau_electricite,
              autres: this.form.autres,
              statut: this.form.statut,
              user_id: this.$auth.user.id
            })   
            .then(response =>{ 
              this.loading = false; 
              console.log(response)
                if(response.data.status == "success"){
                    this.$router.push({path:'/proprio/propriete/voir/'+this.$route.params.id })
                }
                else{
                    this.loading = false; 
                    this.error = response.data.message
                }
             }).catch( err => 
             {
              this.loading = false 
              console.log( err )
             })
            
        },
        }
  }
</script>

<style scoped>
</style>
