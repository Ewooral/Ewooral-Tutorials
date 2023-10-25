<template>
    <div class="row">
        <CustomeHeaderAlert :message="headertext"/>
        <div class="col-12">
            <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
        </div>
        <div class="col-md-2 col-sm-12">
            <div class="card h-auto">
                <div class="card-body text-center">
<!--                    <img-->
<!--                            :src="groupData.uploaded_image"-->
<!--                            class="rounded-circle avatar-xl img-thumbnail"-->
<!--                            alt="profile-image"-->
<!--                    />-->

<!--                    <a @change="uploadGroupLogo" type="file" accept="image/jpeg"  style="float: right" class="btn btn-success mt-2">-->
<!--                        <i class="mdi mdi-content-save"></i> Upload group icon-->
<!--                    </a>-->
                    <picture-inputer
                            ref="pictureInput"
                            width="200"
                            height="200"
                            margin="16"
                            accept="image/jpeg,image/png"
                            size="2"
                            button-class="btn"
                            :custom-strings="{
                            upload: '<h1>Bummer!</h1>',
                            drag: 'Click here to select a file'
                }"
                            @change="onChange"
                            @remove="onRemove"
                    >
                    </picture-inputer>
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <div class="col-md-10 col-sm-12">
             <div class="card">
                 <div class="card-body">
<!--                     <h3 class="mb-3 font-weight-bold">Create group</h3>-->
                     <form-wizard shape="tab"  color="rgb(0, 120, 212)" :finish-button-text="`Create group`" @on-complete="CreateGroup" >
                         <tab-content icon="mdi mdi-account-circle" title="Group information" :before-change="validateGroupData">
                             <div class="row">
                                 <div class="col-lg-12">
                                     <AlertMessage :variant="dangerSuccess" :message="responseMessageGroupInfo" v-if="responseMessageGroupInfo"/>
                                 </div>
                                 <div class="col-lg-6">
                                     <div class="form-group mb-3">
                                         <label class="col-form-label" for="groupName">Group Name</label>
                                         <input
                                             name="groupName"
                                             id="groupName"
                                             type="text"
                                             class="form-control"
                                             v-validate="'required'"
                                             :class="{'is-invalid': vErrors.has('groupName') }"
                                             v-model="groupData.groupName"
                                         />
                                     </div>

                                     <div class="form-group mb-3">
                                         <label class="col-form-label" for="aboutGroup">About Group</label>
                                         <textarea
                                                 id="aboutGroup"
                                                 name="aboutGroup"
                                                 class="form-control"
                                                 rows="5"
                                                 v-validate="'required'"
                                                 :class="{'is-invalid': vErrors.has('aboutGroup') }"
                                                 v-model="groupData.aboutGroup"
                                            ></textarea>
                                     </div>
                                 </div>
                                 <div class="col-lg-6">
                                     <div class="form-group mb-3">
                                         <label class="col-form-label" for="aboutGroup">Country</label>
                                             <multiselect
                                                 id="country"
                                                 name="country"
                                                 v-model="groupData.country"
                                                 v-validate="'required'"
                                                 :options="countryList"
                                                 :searchable="true"
                                                 @select="GetSelectedCountry($event)"
                                                 :class="{'is-invalid': vErrors.has('country') }" >
                                                 <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                     <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                                                               <span class="option__title pl-1">{{ props.option.getCountryname() }}</span></span>
                                                 </template>
                                                 <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                     <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountryname() }}
                                                 </template>
                                              </multiselect>
                                     </div>
                                     <div class="form-group mb-3">
                                         <label>Group Type</label>
                                         <multiselect
                                              v-model="groupData.groupType"
                                              name="groupType"
                                              v-validate="'required'"
                                              :class="{'is-invalid': vErrors.has('groupType') }"
                                              :options="GroupTypes"
                                              @select="GetSelectedGroupType($event)"
                                         ></multiselect>
                                     </div>

                                     <div class="form-group mb-3">
                                         <label>Category</label>
                                         <multiselect v-model="groupData.category"
                                                      v-validate="'required'"
                                                      name="category"
                                                      :options="groupCategories"
                                                      :class="{'is-invalid': vErrors.has('category') }"
                                                      @select="GetSelectedCategory($event)"
                                         >
                                             <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                               <span class="option__desc">
                                                      <span class="option__title pl-1">{{ props.option.getCategoryname() }}</span></span>
                                             </template>
                                             <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                  {{ option.getCategoryname() }}
                                             </template>
                                         </multiselect>
                                     </div>
                                 </div>

                                 <!-- end col -->
                             </div>
                             <!-- end row -->
                         </tab-content>
                         <tab-content icon="mdi mdi-face-profile" title="Project information">
                             <div class="row">
                                 <div class="col-md-6 col-ms-12">

                                     <div class="form-group mb-3">
                                         <label class="col-form-label" for="name">Project Name</label>
                                         <input
                                                 name="name"
                                                 id="name"
                                                 type="text"
                                                 class="form-control"
                                                 v-validate="'required'"
                                                 :class="{'is-invalid': vErrors.has('name') }"
                                                 v-model="project.name"
                                         />

                                     </div>

                                     <div class="form-group mb-3">
                                         <label class="col-form-label" for="about">About Project</label>
                                         <textarea
                                                 id="about"
                                                 name="about"
                                                 class="form-control"
                                                 rows="5"
                                                 v-validate="'required'"
                                                 :class="{'is-invalid': vErrors.has('about') }"
                                                 v-model="project.about"
                                         ></textarea>

                                     </div>


                                     <div class="form-group mb-3">
                                         <label class="col-form-label" for="durationInMonth">Duration (In months)</label>
                                         <input
                                                 name="durationInMonth"
                                                 id="durationInMonth"
                                                 type="number"
                                                 class="form-control"
                                                 v-validate="'required'"
                                                 :class="{'is-invalid': vErrors.has('durationInMonth') }"
                                                 v-model="project.durationInMonth"
                                         />
                                     </div>

                                 </div>
                                 <div class="col-md-6 col-ms-12">

                                     <div class="form-group mb-3">
                                         <label>Project type</label>
                                         <multiselect v-model="project.projectType"
                                                      v-validate="'required'"
                                                      name="projectType"
                                                      :options="projectTypes"
                                                      :class="{'is-invalid': vErrors.has('projectType') }"
                                                      @select="GetSelectedProjectType($event)"
                                         >
                                             <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                               <span class="option__desc">
                                                      <span class="option__title pl-1">{{ props.option.getTemplatename() }} </span></span>
                                             </template>
                                             <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                 {{ option.getTemplatename() }}
<!--                                                 {{ option.getRemarks() }}-->
                                             </template>
                                         </multiselect>
                                     </div>
                                   <div v-if="projectTypes.donation">
                                       <div class="form-group mb-3">
                                           <label class="col-form-label" for="targetAmount">Target amount to raise</label>
                                           <input
                                                   name="targetAmount"
                                                   id="targetAmount"
                                                   type="number"
                                                   class="form-control"
                                                   v-validate="'required'"
                                                   @change="FormatTargetedAmount($event)"
                                                   :class="{'is-invalid': vErrors.has('targetAmount') }"
                                                   v-model="project.targetAmount"
                                           />
                                       </div>
                                   </div>
                                     <div  v-if="projectTypes.saving">
                                         <div class="form-group mb-3">
                                             <!--                                         <label class="col-form-label" for="savings">Amount to save</label>-->
                                             <!--                                         <input-->
                                             <!--                                                 name="savings"-->
                                             <!--                                                 id="savings"-->
                                             <!--                                                 type="number"-->
                                             <!--                                                 class="form-control"-->
                                             <!--                                                 v-validate="'required'"-->
                                             <!--                                                 :class="{'is-invalid': vErrors.has('savings') }"-->
                                             <!--                                                 v-model="project.savings"-->
                                             <!--                                         />-->
                                         </div>
                                     </div>
                                     <div  v-if="projectTypes.saving">
                                         <div class="form-group mb-3" v-if="projectTypes.insurance">
                                             <!--                                         <label class="col-form-label" for="savings">Amount to save</label>-->
                                             <!--                                         <input-->
                                             <!--                                                 name="savings"-->
                                             <!--                                                 id="savings"-->
                                             <!--                                                 type="number"-->
                                             <!--                                                 class="form-control"-->
                                             <!--                                                 v-validate="'required'"-->
                                             <!--                                                 :class="{'is-invalid': vErrors.has('savings') }"-->
                                             <!--                                                 v-model="project.savings"-->
                                             <!--                                         />-->
                                         </div>
                                     </div>

                                     <div  v-if="projectTypes.dues">

                                         <div class="form-group mb-3">
                                             <label>Contribution type</label>
                                             <multiselect
                                                     v-model="project.contributionType"
                                                     name="contributionType"
                                                     v-validate="'required'"
                                                     :class="{'is-invalid': vErrors.has('contributionType') }"
                                                     :options="ContributionType"
                                                     @select="GetSelectedContributionType($event)"
                                             ></multiselect>
                                         </div>

                                         <div class="form-group mb-3">
                                             <label class="col-form-label" for="frequency">Frequency</label>
                                             <input
                                                     name="frequency"
                                                     id="frequency"
                                                     type="number"
                                                     class="form-control"
                                                     :max="max"
                                                     v-validate="'required'"
                                                     :class="{'is-invalid': vErrors.has('frequency') }"
                                                     v-model="project.frequency"
                                             />
                                         </div>
                                         <div class="form-group mb-3">
                                             <label class="col-form-label" for="contributionAMount">Contribution per member</label>
                                             <input
                                                     name="contributionAMount"
                                                     id="contributionAMount"
                                                     type="number"
                                                     class="form-control"
                                                     v-validate="'required'"
                                                     :class="{'is-invalid': vErrors.has('contributionAMount') }"
                                                     v-model="project.contributionAMount"
                                             />
                                         </div>
                                     </div>

                                 </div>
                             </div>
                             <!-- end row -->
                         </tab-content>
                     </form-wizard>
                 </div>
         </div>
        </div>
    </div>
</template>

<script>
    import { FormWizard,TabContent} from 'vue-form-wizard';
    import groupCon from '../../protos/GroupCon_grpc_web_pb'
    import grpcUrl from "../../components/constant";
    import Multiselect from "vue-multiselect";
    import CustomeHeaderAlert from '../../components/shared/CustomHeaderAlert'
    import AlertMessage from '../../components/shared/AlertMessage'
    import PictureInput from 'vue-picture-input'


    export default {
        name: "CreateGroup",
        data() {
            return {
                responseMessage : '',
                headertext :'Create private and public groups',
                dangerSuccess : 'danger',
                responseMessageGroupInfo :'',
                max:12,

                groupData : {
                    uploaded_image:'',
                    groupName:'',
                    aboutGroup:'',
                    country :'',
                    countryCode:'',
                    groupType:'',
                    category:'',
                },
                project :{
                   name:'',
                   about :'',
                   durationInMonth:'',
                   projectTypes:'',
                    projectTypeId:'',
                   targetAmount: '',
                    donationAmount:'',
                    contributionType:'',
                    frequency:'',
                    contributionAMount :'',
                    savings:''
                },
                projectsTypesValues :{
                   donation: false,
                    dues: false,
                    saving : false,
                    insurance: false

                },
                clientGroup : {},
                countryList : [],
                groupCategories : [],
                projectTypes : [],
                GroupTypes : [
                    "Private",
                    "Public"
                ],
                ContributionType : [
                    "Weekly",
                    "Monthly"
                ]
            }
        },
        components : {
            FormWizard,
            TabContent,
            Multiselect,
            CustomeHeaderAlert,
            AlertMessage,
            'picture-inputer': PictureInput
        },
        methods : {
            validateGroupData:  async function(){
                 try {

                     let validatedGroupName = await this.$validator.validate('groupName', this.groupData.groupName);
                     let validatedAboutGroup = await this.$validator.validate('aboutGroup', this.groupData.aboutGroup);
                     let validatedcountryCode = await this.$validator.validate('country', this.groupData.country);
                     let validatedGroupType = await this.$validator.validate('groupType', this.groupData.groupType);
                     let validatedCategory = await this.$validator.validate('category', this.groupData.category);

                     return validatedGroupName && validatedAboutGroup && validatedcountryCode && validatedGroupType && validatedCategory
                 }  catch (e) {
                      console.log(e)
                 }
            },
            FormatTargetedAmount(amount){

                try {
                    console.log(" Amount : ", amount)
                    this.project.targetAmount = grpcUrl.formatMoneyWithoutCurrency(this.project.targetAmount)
                    console.log(" Target amount : ", this.project.targetAmount)
                }catch (e) {
                    console.log(e)
                }
            },
            CreateGroup() {
                try {

                    if(this.projectTypes.dues === true){
                        if(this.project.frequency < 1) {
                            this.responseMessage = " Invalid frequency"
                        }
                    }

                   let request = new groupCon.NewGroupRequestMessage()
                    request.setGroupname(this.groupData.groupName)
                    request.setAboutthegroup(this.groupData.aboutGroup)
                    request.setGrouptype(this.groupData.groupType)
                 //   console.log(" category ", this.groupData.category.getCategoryid())
                    request.setCategoryid(this.groupData.category.getCategoryid())
                    request.setCountrycode(this.$store.getters.getUserInfo.countryCode)

                    request.setTemplateid(this.project.projectTypeId)
                    request.setProjectname(this.project.name)
                    request.setAbouttheproject(this.project.about)
                    request.setProjectdurationinmonths(this.project.durationInMonth)
                    request.setInsurancepackageid("")
                    request.setContributiontypeweeklyormonthly(this.project.contributionType)
                    request.setContributionfrequencyinweeksormonths(this.project.frequency === '' ? 0 : this.project.frequency)
                    request.setContributionamountpermember(this.project.contributionAMount)
                    request.setTargetamounttoraise(this.project.targetAmount)
                    request.setGroupiconimageinbasesixtyfour(this.groupData.uploaded_image)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                     console.log(" Request : ", request)
                    this.clientGroup.createNewGroup(request, this.$store.getters.metadata, (error , res) => {

                        if(error) {
                            console.log(error)
                        }

                        if(res.getIssuccess()) {
                            this._clearControls()
                            this.sweetAlert.showMessage("Create group ", res.getMessage())
                        }
                        else{
                            this.responseMessage = res.getMessage()
                        }
                    })

                }catch (e) {
                    console.log(e)
                }
            },
            _clearControls(){

                try {
                    this.$refs.pictureInput.removeImage()
                    this.groupData = ''
                    this.project = ''
                }catch (e) {
                    console.log(e)
                }
            },
            GetSelectedContributionType(selected){
                 try {
                     console.log("Contribution type : ",selected)
                 }catch (e) {
                     console.log(e)
                 }
            },
            GetSelectedProjectType(selected){

                try {
                    this.project.projectTypeId = selected.getTemplateid()
                    if(selected.getTemplateid() === 'PRITDONATION' || selected.getTemplateid() === 'PUBTDONATION') {
                        this.projectTypes.donation = true
                        this.projectTypes.dues = false
                        this.projectTypes.savings = false
                        this.projectTypes.insurance = false
                        console.log("donation status : ", this.projectTypes.donation)
                    }

                    if(selected.getTemplateid() === 'PRITDUES' || selected.getTemplateid() === 'PRITWELFARE' || selected.getTemplateid() === 'PRITNCNC') {

                           this.project.contributionType = "Monthly"
                           this.project.frequency = 12
                            this.projectTypes.donation = false
                            this.projectTypes.savings = false
                            this.projectTypes.dues = true
                          this.projectTypes.insurance = false

                    }
                    if(selected.getTemplateid() === 'PRITSAVINGS') {
                        this.projectTypes.donation = false
                        this.projectTypes.savings = true
                        this.projectTypes.dues = false
                        this.projectTypes.insurance = false
                    }
                    if(selected.getTemplateid() === 'PRITLIFEINSURE') {
                        this.projectTypes.donation = false
                        this.projectTypes.savings = false
                        this.projectTypes.dues = false
                        this.projectTypes.insurance = true
                    }
                    console.log("Selected project type :" ,selected)
                }catch (e) {
                    console.log(e)
                }
            },
            GetSelectedCategory(selected) {
                try {
                    this.groupData.category = selected.getCategoryid()
                }  catch (e) {
                    console.log(e)
                }
            },
            GetProjectTypes(groupType) {

                try {
                      let request = new groupCon.GroupCountryCodeRequestMessage()

                    request.setGrouptype(groupType)
                    request.setCountrycode(this.$store.getters.getUserInfo.countryCode)

                    this.clientGroup.getProjectTemplateList(request,this.$store.getters.metadata, (error,res) => {

                        if(error) {
                            console.log("error : ", error)
                        }

                        if(res) {
                            this.projectTypes = res.getTemplatelistList()
                        }
                    })

                }catch (e) {
                    console.log(e)
                }
            },
            GetSelectedGroupType(selected){

                try {
                    this.groupData.groupType = selected
                    console.log("Group type id : ",selected)
                    this.getGroupCategoriesByGroupType(selected)
                    this.GetProjectTypes(selected)
                }catch (e) {
                    console.log(e)
                }
            },
            onChange(image) {
                if (image) {
                    this.groupData.uploaded_image = image
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            },
            onRemove(){
                console.log("Heelo Remove");
            },
            getGroupCategoriesByGroupType(groupType) {

                try {
                    let request = new groupCon.GroupCountryCodeRequestMessage()
                     request.setGrouptype(groupType)
                     request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
                     this.clientGroup.getGroupCategoryList(request,this.$store.getters.metadata, (error,res) => {

                         if(error) {
                             console.log(error)
                         }

                         if(res) {
                             this.groupCategories = res.getCategorylistList()
                         }
                     })

                } catch (e) {
                    console.log(e)
                }
            },
            GetGroupCountryList() {
                try {

                    let request = new groupCon.EmptyGroupMessage()

                    this.clientGroup.getEganowGroupCountryList(request, this.$store.getters.metadata , (error, res) => {
                        if(error) {
                            console.log(" Error occured : ", error)
                        }

                        if(res) {
                            console.log( " Response : ", res.getCountrylistList())
                           this.countryList = res.getCountrylistList()
                        }
                    })

                } catch (e) {
                    console.log(e)
                }
            },
            GetSelectedCountry(selectedCountry) {
                try {
                    this.groupData.countryCode = selectedCountry.getCountrycode()

                }catch (e) {
                    console.log("Error : ", e)
                }
            }
        },
        created() {
            this.clientGroup = new groupCon.GroupConSvcClient(grpcUrl.URL,null,null);
             this.GetGroupCountryList()

            console.log("uploaded image : ", this.groupData.uploaded_image)
            if(this.groupData.uploaded_image ===  null || this.groupData.uploaded_image === '') {
                console.log(" image value : ", this.groupData.uploaded_image)
                this.groupData.uploaded_image = require('@/assets/images/users/avatar.png')
            }
            this.$store.dispatch('setAppHeader', {
                title: "Create group",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: "Create a group",
                        href: "#",
                    },
                ],
            })
        }
    }
</script>

<style scoped>

</style>