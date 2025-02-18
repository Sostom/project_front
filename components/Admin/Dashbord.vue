<template>
    <div class="dashbord-admin">
        <div class="container">
            
        <div class="intro-area-admin">
            <div class="single-well-admin mar-well">
                <a href="#">
                    <h3>Bienvenue sur votre espace propriétaire	&#x1F38A;</h3>
                </a>
                <p>
                    Ici, vous aurez une idée du nombre de propriétés que vous avez ajouté. Aussi vous pouvez accédez aux diverses propriétés que vous avez répertoriés par ville. Notez que chez <span class="color">MiMob</span>, nous travaillons pour vous fournir de nouveaux services pour faciliter la gestion de vos propriétés. Merci de nous laisser des commentaires et des suggestions au fur et à mesure &#x1F60A;.  
                </p>
            </div>
            
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <div class="row">
                <div class="col-sm-8">
                  <div class="panel panel-primary">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div>
                            Toutes les chambres
                          </div>
                        </div>
                        <div class="col-xs-3 text-right huge">
                            {{ stats.all_proprietes }}
                        </div>
                      </div>
                    </div><a href="/proprio/propriete/get">
                    <div class="panel-footer">
                      <span class="pull-left">Accédez aux chambres</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="panel panel-green">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div>
                            01 Chambre Salon
                          </div>
                        </div>
                        <div class="col-xs-3 text-right huge">
                            {{ stats.propriete_1cs }}
                        </div>
                      </div>
                    </div><a href="/proprio/propriete/type/1">
                    <div class="panel-footer">
                      <span class="pull-left">Accédez aux chambres</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="panel panel-green">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div>
                            02 Chambres Salon
                          </div>
                        </div>
                        <div class="col-xs-3 text-right huge">
                          {{ stats.propriete_2cs }}
                        </div>
                      </div>
                    </div><a href="/proprio/propriete/type/2">
                    <div class="panel-footer">
                      <span class="pull-left">Accédez aux chambres</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="panel panel-green">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div>
                            03 Chambres Salon
                          </div>
                        </div>
                        <div class="col-xs-3 text-right huge">
                            {{ stats.propriete_3cs }}
                        </div>
                      </div>
                    </div><a href="/proprio/propriete/type/3">
                    <div class="panel-footer">
                      <span class="pull-left">Accédez aux chambres</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="panel panel-green">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-9">
                          <div>
                            04 Chambres Salon
                          </div>
                        </div>
                        <div class="col-xs-3 text-right huge">
                            {{ stats.propriete_4cs }}
                        </div>
                      </div>
                    </div><a href="/proprio/propriete/type/4">
                    <div class="panel-footer">
                      <span class="pull-left">Accédez aux chambres</span> <span class="pull-right"><i class=
                      "fa fa-arrow-circle-right"></i></span>
                      <div class="clearfix"></div>
                    </div></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="col-lg-12 col-sm-12">
            <div class="panel panel-info">
            <div class="panel-heading">
                <i class="fa fa-bell fa-fw"></i> Boite de notifications
            </div>
            <div class="panel-body">
                <div class="list-group">
                <a class="list-group-item" href="#"><i class="fa fa-comment fa-fw"></i> Pas encore disponible<span class=
                "pull-right text-muted small"><em>Pour Bientôt</em></span></a> 
                <!-- <a class="list-group-item" href=
                "#"><i class="fa fa-tasks fa-fw"></i> New Task <span class="pull-right text-muted small"><em>Bientot</em></span></a> <a class="list-group-item" href="#"><i class="fa fa-upload fa-fw"></i>
                Server Rebooted <span class="pull-right text-muted small"><em>55 minutes ago</em></span></a>
                <a class="list-group-item" href="#"><i class="fa fa-bolt fa-fw"></i> Server Crashed! <span class=
                "pull-right text-muted small"><em>3:33 PM</em></span></a> <a class="list-group-item" href=
                "#"><i class="fa fa-warning fa-fw"></i> Server Not Responding <span class=
                "pull-right text-muted small"><em>10:57 AM</em></span></a> -->
                </div><a class="btn btn-info btn-block" href="#">Masquer tout</a>
            </div>
            </div>
        </div>
        </div>
        </div>
        <!-- <div class="project-page-area area-padding-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 ">
                        <div class="section-headline text-center">
                            <h3>Recherchez vos propriétés par ville</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="project-content">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/cotonou.jpg" alt="" />
                            </a>
                            <div class="add-actions text-center">
                            <NuxtLink :to="{ path: '/proprio/propriete/ville/1' }">
                                <i class="port-icon ti-zoom-in"></i>
                            </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Cotonou</h4>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/calavi.jpg" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/2' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Abomey - Calavi</h4>
                        </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/dassa.png" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/3' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Bohicon</h4>
                        </div>
                        </div>

                    </div>

                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/Parakou2.jpg" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/4' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Parakou</h4>
                        </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/natitingou.jpg" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/5' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Natitingou</h4>
                        </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/savalou.png" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/6' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Savalou</h4>
                        </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/porto-novo.jpg" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/7' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Porto - Novo</h4>
                        </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/ouidah.jpg" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/8' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Ouidah</h4>
                        </div>
                        </div>

                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <div class="single-awesome-project">
                        <div class="awesome-img">
                            <a href="#">
                            <img src="/img/villes/grand-popo.jpg" alt="" />
                            </a>
                            <div class="add-actions text-center">
                                <NuxtLink :to="{ path: '/proprio/propriete/ville/9' }">
                                    <i class="port-icon ti-zoom-in"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="project-dec">
                            <h4>Grand - Popo</h4>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div> -->

        
        <div class="banner-area fix area-padding">
            <div class="container">
                    <div class="row">
                        <div class="add-content col-md-6 col-sm-6 col-xs-6">
                            <h3>
                                Nos contacts
                            </h3>
                        </div>
                        <div class="add-contact col-md-6 col-sm-6 col-xs-6">
                            <span class="call-us"
                                ><i class="ti-mobile"></i>Téléphone :
                                (+229)-01-69-43-61-01</span
                            >
                            <span class="call-us mail-us"
                                ><i class="ti-email"></i>Mail :
                                mimob.contact@gmail.com</span
                            >
                        </div>
                    </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Dashbord",
    data() {
        return {
            stats: []
        };
    },
    mounted() {
          this.getStats();
    },

    methods: {
        getStats() { 
            this.$axios.get('/stats/proprietes',{
                params: {
                    user_id: this.$auth.user.id,
                }
            })
            .then(response =>{
            //   console.log(response);
                this.stats = response.data.data[0]
            })
        },
    }
};
</script>

<style scoped>
</style>
