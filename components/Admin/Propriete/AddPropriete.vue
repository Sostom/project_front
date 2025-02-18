<template>
  <div class="about-area-admin area-padding-2 fix">
    <div class="container">
      <div class="single-well-admin mar-well">
          <a href="#">
              <h3>Espace Propriétaire</h3>
          </a>
          <p>
              Ajoutez ici toutes vos propriétés avec des caractéristiques qui
              permettront aux utilisateurs de comprendre vos offres. Plus, vous soignez 
              l'ajout des caractéristiques relatives à vos offres, plus, le système vous répertorie 
              parmi les meilleurs propriétaires, ce qui vous arrange quant au référencement de 
              vos différentes propriétés.Les types de caution sont exprimée comme suit: X - Y  - Z avec X, le montant de l'avance, 
              Y le loyer et Z la commission du démarcheur.
          </p>
      </div>

        <div class="error_message-admin" v-if="error">
          <i class="fa fa-exclamation-triangle error_info" aria-hidden="true"></i> {{ error }}
        </div>

      <div class="row ajout-form-admin">
        <h6 class="text-center titre_ajout">AJOUT DE PROPRIETE</h6 class="text-center"><hr>
        <form class="p-5" enctype="multipart/form-data">
              <div class="col-md-6 bloc-input">
                <label>Type <span class="obligatoire">*</span></label>
                <select class="form-control" v-model="form.type">
                  <option disabled value="">Choisissez...</option>
                  <option value="Sanitaire">Sanitaire</option>
                  <option value="Ordinaire">Ordinaire</option>
                </select>
                <div class="error_type" v-if="error && errors.type">
                  <i class="fa fa-info-circle error_info" aria-hidden="true"></i> Vous devez choisir le type
                </div>
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
                <div class="error_type" v-if="error && errors.feature">
                  <i class="fa fa-info-circle error_info" aria-hidden="true"></i> Vous devez choisir le nombre de locataire dans la maison.
                </div>
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
                        <button :class="{ 'btn-loading-admin': loading }" @click="addVille(search)" class="btn-add">
                          Ajouter "{{ search }}"<span v-if="loading" class="spinner-admin"></span>
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
                    placeholder="Saisissez la quartier"
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
                        <button :class="{ 'btn-loading-admin': loading }"  @click="addQuartier(search)" class="btn-add">
                          Ajouter "{{ search }}"<span v-if="loading" class="spinner-admin"></span>
                        </button>
                      </div>
                    </template>
                  </v-select>
              </div>
              <div class="col-md-8 div-info_sup">
                  <label>Précision sur l'indication de la maison</label>
                  <textarea
                      v-model="form.indication"
                      autocomplete="off"
                      type="textarea"
                      class="form-control"
                      placeholder="Donnez une indication pour retrouver la maison"
                      cols="30"
                      rows="3"
                  ></textarea>
              </div>
              <div class=" col-md-6 bloc-input">
                <label>Nombre d'habitation<span class="obligatoire">*</span></label>
                <input
                    v-model="form.nbre_habitation"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre de ménage dans la maison"
                />
                  <div class="error_type" v-if="error && errors.nbre_habitation">
                    <i class="fa fa-info-circle error_info" aria-hidden="true"></i> Obligatoire!!! Le nombre d'habitant indique le nombre de personnes présentes dans la maison.
                  </div>
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
                <label>Nombre de cuisine<span class="obligatoire">*</span></label>
                <input
                    v-model="form.nbre_cuisine"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre de cuisine"
                />
              </div>
              <div class="col-md-6 bloc-input">
                <label>Nombre de douche<span class="obligatoire">*</span></label>
                <input
                    v-model="form.nbre_douche"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le nombre de douche"
                />
              </div>
              <div class="col-md-6 bloc-input">
                <label>Montant du loyer<span class="obligatoire">*</span></label>
                <input
                    v-model="form.loyer"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le montant du loyer pour cette chambre"
                />
                  <div class="error_type" v-if="error && errors.loyer">
                    <i class="fa fa-info-circle error_info" aria-hidden="true"></i> Vous devez définir le montant du loyer.
                  </div>
              </div>
              <div class="col-md-6 bloc-input">
                <label>Type de Caution<span class="obligatoire">*</span></label>
                <select class="form-control" placeholder="" v-model="form.caution_type">
                  <option disabled value="">Choisissez...</option>
                  <option value="Aucun">Aucun</option>
                  <option value="Sur négociation">Sur négociation</option>
                  <option value="1-1-1">1-1-1</option>
                  <option value="2-1-1">2-1-1</option>
                  <option value="3-1-1">3-1-1</option>
                  <option value="Autre">Autre</option>
                </select>
                  <div class="error_type" v-if="error && errors.caution_type">
                    <i class="fa fa-info-circle error_info" aria-hidden="true"></i> Obligatoire!!! Les différents types de caution : <br> X-X-X : X mois caution - X mois loyer - X mois démarcheur <br> Sur Négociation/Autres : A voir avec le démarcheur
                  </div>
              </div>
              <div class="col-md-6 bloc-input">
                <label>Montant de la Caution Eau et Electricité<span class="obligatoire">*</span></label>
                <input
                    v-model="form.caution_eau_electricite"
                    autocomplete="off"
                    type="number"
                    class="form-control"
                    placeholder="Entrer le montant total de la caution Eau et Electricité"
                />
                  <div class="error_type" v-if="error && errors.caution_eau_electricite">
                    <i class="fa fa-info-circle error_info" aria-hidden="true"></i> Vous devez définir le montant total de la caution Eau et Electricité.
                  </div>
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
                <label>Informations supplémentaires</label>
                <textarea
                    v-model="form.autres"
                    autocomplete="off"
                    type="textarea"
                    class="form-control"
                    placeholder="Renseignez ici les détails. Si par exemple, la chambre est à l'intérieur d'un immeuble, s'il y a un jardin et autres"
                    cols="30"
                    rows="5"
                ></textarea>
              </div>
              <div class="col-md-8 div-info_sup">
                <label>Ajoutez une image pour cette propriété<span class="obligatoire">*</span></label>
                <input type="file" @change="handleFileUpload" size="70" name="file" ref="file" class="input_file_style_file" multiple /> <br><br><br>            
              </div>

              <div class="col-md-12">
                <button :class="{ 'btn-loading-admin': loading }" type="submit" class="custom-btn btn-5" @click.prevent="submit()">Enregistrer <span v-if="loading" class="spinner-admin"></span></button>
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
        name: "AddPropriete",
        components: {
          vSelect
        },
        data() {
          return {
            loading: false, 
            form: {
              type: "",
              ville_id: "",
              quartier_id: "",
              feature: "",
              indication: "",
              nbre_habitation: "",
              nbre_cuisine: 1,
              nbre_douche: 1,
              loyer: "",
              caution_type: "",
              compteur: '',
              caution_eau_electricite: "",
              autres: "",
              garage: "",
              statut: "disponible",
              image: ""

            },
            villes: [],
            quartiers: [],
            caution_types: [],
            errors: [],
            error: null,
            selectedFile: null,
            selectedVille: null

          };
        },

              
        mounted() {
          //récupère les differents types
          this.getVilles();
        },

        methods: {
          
          updateSelectedVille() {
              this.selectedVille = this.villes.find(ville => ville.id === this.form.ville_id);
          },
          
          updateSelectedQuartier() {
              // this.selectedVille = this.villes.find(ville => ville.id === this.form.ville_id);
              // console.log(this.selectedQuartier);
              
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

          addVille(search){
            this.loading = true; 
            this.$axios.post('/villes',{
              name: search,
            })
            .then(response =>{
              this.loading = false; 
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
            this.loading = true; 
            this.$axios.post('/quartiers',{
              name: search,
              ville_id: this.form.ville_id
            })
            .then(response =>{
              this.loading = false; 
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

        async submit(){
              this.loading = true; 
              const FormData = require('form-data');

              let formd = new FormData();
              formd.append('type', this.form.type);
              formd.append('ville_id', this.form.ville_id);
              formd.append('quartier_id', this.form.quartier_id);
              formd.append('feature', this.form.feature);
              formd.append('indication', this.form.indication);
              formd.append('nbre_habitation', this.form.nbre_habitation);
              formd.append('nbre_cuisine', this.form.nbre_cuisine);
              formd.append('nbre_douche', this.form.nbre_douche);
              formd.append('loyer', this.form.loyer);
              formd.append('compteur', this.form.compteur);
              formd.append('caution_type', this.form.caution_type);
              formd.append('caution_eau_electricite', this.form.caution_eau_electricite);
              formd.append('autres', this.form.autres);
              formd.append('garage', this.form.garage);
              formd.append('statut', this.form.statut);
              formd.append('image', this.selectedFile);
              formd.append('user_id', this.$auth.user.id);

            await  this.$axios.post('/proprietes',formd)   
            .then(response =>{ 
              // console.log(response)
                    this.loading = false; 
                if(response.data.status == "success"){
                    this.$router.push({path:'/proprio/propriete/get', })
                }
                else{
                    this.loading = false; 
                    this.error = response.data.message
                    this.errors = response.data.data
                }
             }).catch( err => {
              this.loading = false; 
                console.log( err )
             } )
            
        },
        }
  }
</script>

<style scoped>
</style>
