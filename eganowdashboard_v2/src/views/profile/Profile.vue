<template>
    <horizontal>
    <div class="row">

        <div class="col-10 mx-auto">
            <AlertMessage :variant="dangerSuccess" :message="responseMessageID" v-if="responseMessageID"/>
            <div class="row">
                <div class="col-lg-5 col-xl-5">
                    <div class="card">
                        <div class="card-body text-center">
                            <img
                                    :src="uploaded_image"
                                    class="rounded-circle avatar-xl img-thumbnail"
                                    alt="profile-image"
                            />

                            <button @click="openUploadModal"  style="float: right" class="btn btn-success mt-2">
                                <i class="mdi mdi-content-save"></i> Upload
                            </button>
                            <h4 class="mt-3 mb-0">{{fullname}}</h4>
                            <p class="text-muted"> {{businessname}}</p>

                            <div class="text-left mt-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless table-sm">
                                        <tbody>
<!--                                        <tr>-->
<!--                                            <th scope="row"></th>-->
<!--                                            <td class="text-right">-->
<!--                                                <a style="cursor: pointer" class="text-right action-icon px-1">-->
<!--                                                    <i class="mdi mdi-square-edit-outline"></i>-->
<!--                                                </a>-->
<!--                                            </td>-->
<!--                                        </tr>-->
                                        <tr>
                                            <th scope="row">Full Name :</th>
                                            <td class="text-muted"> {{fullname}}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Mobile :</th>
                                            <td class="text-muted">{{mobileNumber}}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email :</th>
                                            <td class="text-muted"> {{ email}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <!-- end card-box -->
                    </div>
                </div>
                <!-- end col-->

                <div class="col-lg-7 col-xl-7">
                    <div class="card">
                        <div class="card-body">
                            <b-tabs content-class="mt-1" pills class="navtab-bg">
                                <b-tab active>
                                    <template v-slot:title >
                                            <i class="mdi mdi-face-profile mr-1" ></i>Standard
                                    </template>
                                    <div>
<!--                                        <h5 class="mb-4 text-uppercase">Experience</h5>-->
                                        <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                                        <form @submit.prevent="SaveIDCardInfo">
                                            <h5 class="mb-3 text-uppercase bg-light p-2">
                                                <i class="mdi mdi-account-circle mr-1"></i> ID Information
                                            </h5>
                                            <b-overlay :show="showLoader" rounded="sm">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group mb-3">
                                                        <label>Select  country</label>
                                                        <multiselect
                                                                id="sendercountry"
                                                                name="sendercountry"
                                                                v-model="sendercountry"
                                                                v-validate="'required'"
                                                                :options="AllCountries"
                                                                :searchable="true"
                                                                @select="GetPaymentTypeForSenderBySelectedCountryCode($event)"
                                                                :class="{'is-invalid': vErrors.has('country') }" >
                                                            <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                                                   <span class="option__title pl-1">{{ props.option.getCountryname() }}</span></span>
                                                            </template>
                                                            <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountryname() }}
                                                            </template>
                                                        </multiselect>
                                                        <span v-show="vErrors.has('sourcecountry')" class="help text-danger">{{ vErrors.first('sourcecountry') }}</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group mb-3">
                                                        <label>Select provider</label>
                                                        <multiselect
                                                                id="providers"
                                                                name="providers"
                                                                v-model="providers"
                                                                v-validate="'required'"
                                                                :options="IDCardProviders"
                                                                :searchable="true"
                                                                @select="GetSelectedProvider($event)"
                                                                :class="{'is-invalid': vErrors.has('providers') }" >
                                                            <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                   <span class="option__title pl-1">{{ props.option.getIdverifyprovidername() }}</span>
                                                            </template>
                                                            <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                {{ option.getIdverifyprovidername() }}
                                                            </template>

                                                        </multiselect>
<!--                                                        <span v-show="vErrors.has('providers')" class="help text-danger">{{ vErrors.first('providers') }}</span>-->
                                                    </div>
                                                </div>
                                                <div class="col-md-12" v-if="showAcceptableIdTypeBasedOnOptionSelected">
                                                    <div class="form-group mb-3">
                                                        <label > Acceptable ID Type(s)</label>
                                                        <div class="font-20"> {{acceptableidtypes}}</div>
                                                    </div>
                                                </div>
                                                <!-- end col -->
                                            </div>
                                            </b-overlay>
                                            <!-- end row -->

                                            <div class="text-right" v-if="idverifyprovidercode">
<!--                                                <mati-button-->
<!--                                                    :clientid="providerclientid"-->
<!--                                                    flowId="6176a04f22b2a3001beea0f0"-->
<!--                                                    metadata=""-->
<!--                                                    @click="GetCallbackForMatti"-->
<!--                                                    id="mati-button"-->
<!--                                                />-->

                                            </div>

                                        </form>
                                    </div>
                                    <!-- end tab-pane -->
                                </b-tab>
                            </b-tabs>
                        </div>
                        <!-- end card-box-->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-10 mx-auto">
            <div class="card" v-if="this.providercode">
                <div class="form-group m-2 pull-left">
                 <button class="btn btn-outline-primary pull-left" @click="BackToDashboard">  Back to dashboard</button>
                </div>
                <div v-if="this.providercode==='SUMSUBUK001'">
                    <div id="sumsub-websdk-container"></div>
                </div>
                <div v-else-if="this.providercode === 'GHANANID001'">

                    <AlertMessage :variant="dangerSuccess" :message="responseMessageIDCardVerification" v-if="responseMessageIDCardVerification"/>
                    <div class="row">
                            <b-overlay :show="showLoaderIdProvider" rounded="sm">
                                <div class="col-lg-6 m-2">
                                    <div class="form-group mb-3">
                                        <label>Enter id card number</label>
                                        <input
                                                type="text"
                                                id="idNumber"
                                                class="form-control"
                                                :placeholder="$t('profile.id_card_number')"
                                                v-model="idNumber"
                                                v-validate="'required'"
                                                :class="{'is-invalid': vErrors.has('idNumber') }"
                                                name="idNumber"
                                        />
                                        <span v-show="vErrors.has('idNumber')" class="help text-danger">{{ vErrors.first('idNumber') }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-12 m-2">

                                    <div class="form-group mb-3">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <take-selfie @picture-taken="selfieImageTakeen = $event"/>
<!--                                                <picture-inputer-->
<!--                                                        ref="pictureInput"-->
<!--                                                        width="600"-->
<!--                                                        height="600"-->
<!--                                                        margin="16"-->
<!--                                                        accept="image/jpeg,image/png"-->
<!--                                                        size="2"-->
<!--                                                        button-class="btn"-->
<!--                                                        :custom-strings="{-->
<!--                                                            upload: '<h1>Bummer!</h1>',-->
<!--                                                            drag: 'Click here to select a file'-->
<!--                                                        }"-->
<!--                                                        @change="onChange"-->
<!--                                                        @remove="onRemove"-->
<!--                                                >-->
<!--                                                </picture-inputer>-->
                                            </div>
                                            <div class="col-lg-6">
                                               <!-- <img :src="selfieImageTakeen" class="pull-right" alt="" />-->
                                               <div v-if="selfieImageTakeen">
                                                   <cropper ref="cropper"  class="example-cropper" :src="selfieImageTakeen" />
                                                   <drop-zone
                                                           v-model="selfieImageTakeen"
                                                           class="pb-15"
                                                   />
                                                   <div class="button-wrapper mt-1">
                                                       <span class="button btn btn-success" @click="cropImage">Crop image</span>
                                                   </div>

                                               </div>
                                                <div  v-if="croppedImage">
                                                     <h3> Cropped Image</h3>
                                                    <img :src="croppedImage" class="rounded-circle" >
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3 m-2">
                                         <div class="row">
                                             <button class="btn btn-primary pull-left" @click="SendGhanaCardData"> Submit</button>
                                         </div>
                                    </div>
                                </div>
                            </b-overlay>
                        </div>
                </div>
            </div>
        </div>

        <!-- end col -->
    </div>
    </horizontal>
</template>

<script>
    import horizontal from "../layouts/horizontal";
    import AlertMessage from '../../components/shared/AlertMessage'
    import Multiselect from "vue-multiselect";
    import commons from "../../protos/CommonData_grpc_web_pb";
    import idcardprovider from "../../protos/IDCardProvider_grpc_web_pb"
    import grpcUrl from "../../components/constant";
    import SweetAlertWrapper from "../../sweetAlert";
    import snsWebSdk from '@sumsub/websdk';
    import TakeSelfie from "./TakeSelfie";
    import { Cropper } from "vue-advanced-cropper";
    import "vue-advanced-cropper/dist/style.css";
    // import PictureInput from 'vue-picture-input'

    export default {
        data() {
            return {

                responseMessageIDCardVerification : '',
                showLoaderIdProvider : false,
                croppedImage : null,
                selfieImageTakeen :null,
                byteArrayData : null,
                idNumber : '',
                showLoader : false,
                showAcceptableIdTypeBasedOnOptionSelected : false,
                 acceptableidtypes : '',
                fullname : '',
                dangerSuccess :'danger',
                responseMessage:'',
                email :'',
                mobileNumber :'',
                responseMessageID :'',
                businessname :'',
                kycDataStatus :'',
                sendercountry:'',
                countrycode :'',
                providers :'',
                AllCountries :[],
                IDCardProviders :[],
                countrydialcode: '',
                clientcommonData : {},
                clientIdCardProvider :{},
                providerclientid :'',
                idverifyprovidercode :'',
                providerclientkey:'',
                providercode :'',
                apiName :'',
                uploadPreset :'',
                publicIdAndFileName :'',
                uploaded_image :'',
                filename :'',
                sumsub : {
                    accesstoken :'',
                    email :'',
                    phone :''
                }

            }
        },
        components : {
            horizontal,
            Multiselect,
            AlertMessage,
            'take-selfie':TakeSelfie,
            Cropper

        },
        methods :{
            RemoveImage(){
               this.selfieImageTakeen = null
            },
            _clearControl() {
               this.selfieImageTakeen = null
                this.croppedImage = null
               this.idNumber = null;
            },
            onChange(image) {
                if (image) {
                    this.image = image
                    this.croppedImage = image
                    console.log("New Images : ", image)

                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            },
            onRemove(){
                console.log("Hello Remove");
            },

            cropImage() {
                const result = this.$refs.cropper.getResult();
                this.croppedImage = result.canvas.toDataURL(
                    "image/png"
                )
               console.log(" Width : ",result.canvas.width)
               console.log(" Height : ",result.canvas.height)
            },

        _base64ToArrayBuffer(base64) {


            let byteString = atob(base64.split(',')[1]);

            let ab = new ArrayBuffer(byteString.length);
            let ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            this.byteArrayData = ia
           console.log("data : ", ia)
       },
            SendGhanaCardData : async function(){

             let validateIdNumber = await this.$validator.validate('idNumber', this.idNumber);

             if(validateIdNumber && this.croppedImage !== null) {

                  try {
                      this._base64ToArrayBuffer(this.croppedImage)
                      //
                      let request = new idcardprovider.GhanaCardCustomerDataRequestMessage();
                      request.setIdprovidercode(this.providercode)
                      request.setCountrycode(this.countrycode)
                      request.setSelfieimageinbytes(this.byteArrayData)
                      request.setIdimagetypepngorjpegorwsq("png")
                      request.setLanguageid("en")
                      request.setMobileorweb("WEB")
                      request.setIdnumber(this.idNumber)
                      console.log(" id card number language : ", this.$store.getters.getUserInfo.languageId)
                      console.log(" byte array : ", this.byteArrayData)
                      console.log(" Id card REQUEST : ", request)
                       this.showLoaderIdProvider = true
                       this.clientIdCardProvider.ghanacardSubmitCustomerData(request, this.$store.getters.metadata, (err,res) => {
                       this.showLoaderIdProvider = false
                           if(err) {
                               console.log(" Picture error : ", err)
                           }
                           if(res.getIssuccess()) {
                               this._clearControl()
                               this.sweetAlert.showMessage("Id card verification ", res.getMessage())
                                console.log(res.getMessage())
                           }
                           else {
                               console.log(" Something went wrong : ", res)
                               this.dangerSuccess ='danger'
                               this.responseMessageIDCardVerification = res.getMessage()
                           }
                      })

                  }catch (e) {
                      console.log("Selfie data submission error : ", e)
                  }
             }

            },
            BackToDashboard(){
                this.$router.push('/').catch(() => { })
            },
            GetPaymentTypeForSenderBySelectedCountryCode(selectedsourcecountry){
                try {
                        this.countrydialcode = selectedsourcecountry.getCountrydialcode()
                        this.countrycode = selectedsourcecountry.getCountrycode()
                        this.GetListOfProvidersByCountrycode(this.countrycode)
                }catch (e) {
                    console.log("Error : ", e.getMessage())
                }
            },
            GetSenderCountryList() {
                let request = new commons.EmptyCommonDataMessage()

                this.clientcommonData.getSenderAllCountries(request, this.$store.getters.metadata, (err,res) => {

                    if(res) {
                        this.AllCountries = res.getCountrylistList()
                    }
                })
            },
            openUploadModal() {
                 console.log(" File name : ", this.filename)
                window.cloudinary.openUploadWidget(
                    {
                      cloud_name : this.apiName,
                      upload_preset :  this.uploadPreset,
                        folder : this.publicIdAndFileName,
                        secure: true,
                        filename_override : true,
                        public_id : this.filename

                        // option : {
                        //   secure_url : `https://res.cloudinary.com/eganow/image/upload/${this.apiName}/${this.publicIdAndFileName} ${this.filename}.png`
                        // }

                      // file_name : this.filename,
                      // api_key : this.apikey,
                      // api_secret : this.apisecret
                    },
                    (error, result) => {
                        if (!error && result && result.event === "success") {
                          //  console.log('Done uploading..: ', result.info);
                            this.uploaded_image = result.info.secure_url
                            // UPDATE PROFILE IN THE

                            // let filename = result.info.secure_url
                            // let removeDefaultImagename = filename.substring(0, filename.lastIndexOf('/'))
                            //  let fileUrl =  removeDefaultImagename+'/'+this.publicIdAndFileName+''+ this.filename+'.png'
                            this.SaveProfileImage(result.info.secure_url)
                        }
                    }).open();
            },
            GetListOfProvidersByCountrycode(countrycode) {

                 try {

                       let  request = new idcardprovider.CountryIdCardRequestMessage()
                     this.IDCardProviders = []
                      request.setCountrycode(countrycode)
                      request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                      this.clientIdCardProvider.iDCardProvidersPerCountry(request, this.$store.getters.metadata, (err,res) => {

                          if(err) {
                              console.log(" Error : ", err)
                          }
                          console.log(" Providers : ", res.getIdcardproviderlistList())
                          if(res) {
                              this.IDCardProviders = res.getIdcardproviderlistList()
                          }
                          else {
                              console.log(" Card exist : ", res.getMessage())
                          }

                      })

                 } catch (e) {
                     console.log(" Error : ",e)
                 }
            },
            GetSelectedProvider(provider){

                try {

                    this.idverifyprovidercode =  provider.getIdverifyprovidercode()
                    this.providerclientid = provider.getSdkclientid()
                    this.providerclientkey = provider.getSdkclientkey()
                    this.providercode = provider.getIdverifyprovidercode()
                     // if(provider.getIdverifyprovidername() === "OPTION 1") {
                     //     this.GetNewAccessTokenForClient()
                     // }
                     this.acceptableidtypes = provider.getAcceptableidtypes()
                     this.showAcceptableIdTypeBasedOnOptionSelected = true;
                      console.log(provider)

                   if(this.providercode === "GHANANID001") {
                       console.log("Ghana card")
                       this.StartCapture()
                   }

                  if(this.providercode === 'SUMSUBUK001'){
                      console.log(" Sumsub")
                      this.GetNewAccessTokenForClient()
                  }
                } catch (e) {
                    console.log(" Error : ",e)
                }
            },
            SaveIDCardInfo(){

                try {

                    console.log(" id card ")

                } catch (e) {
                    console.log(" Error : ",e)
                }

            },
            CropImageTakenForGhanaCard() {

                try {
                        console.log("hehe")
                } catch (e) {
                    console.log(" Error : ", e)
                }
            },
            // REMOVE FROM COMMON DATA PROTO TO ID CARD PROVIDER
            GetCallbackForMatti(){

                try {

                    const button = document.getElementById("mati-button");
                    console.log(" button id :", button)
                    button.addEventListener('mati:userFinishedSdk', ({ detail }) => {
                        console.log('finished payload', detail)
                        this.responseMessage=''
                        let request = new commons.IDCardDataRequestMessage()

                        request.setIdverifyprovidercode(this.providercode)
                        request.setIdprovidertransrefno(detail.identityId)
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                        request.setMobileorweb("WEB")
                        console.log(" request : ", request)
                        this.showLoader = true
                        this.clientcommonData.initiateNewCustomerIdCardVerification(request, this.$store.getters.metadata, (err, res) => {
                         this.showLoader = false
                            if(err) {
                                console.log(" Error : ", err)
                            }
                            if(!res.getIssuccess()) {
                                this.responseMessage = res.getMessage()
                                console.log(" failed message : ", res.getMessage())
                            }else{
                                //this.providers=''
                                this.sweetAlert.showMessage("Verification ", res.getMessage())
                                 console.log(" success message : ", res.getMessage())
                            }
                        })

                    });

                } catch (e) {
                    console.log(" Error : ",e)
                }
            },
            GetProfileUploadCredentials(){
                 try {
                        const request = new commons.EmptyCommonDataMessage();

                        this.clientcommonData.getProfilePictureUploadCredentials(request, this.$store.getters.metadata, (error , res) => {

                            if(error) {
                                console.log(" Server error from profile picture credentials upload : ", error)
                            }
                            if(res) {
                                this.apiName = res.getApiname()
                                this.publicIdAndFileName = res.getPublicidandfilename()
                                this.uploadPreset = res.getUploadpreset()
                                this.filename = res.getFilename()
                            }
                        })
                 }  catch (e) {
                      console.log(" GEt profile upload credential error : ", e)
                 }
            },
            SaveProfileImage(imageurl) {

                try {

                    const request = new commons.CustProfileInfo()
                         console.log(" Request : ", imageurl)
                    request.setProfileimageendpoint(imageurl)

                    this.clientcommonData.saveProfilePictureInPrime(request, this.$store.getters.metadata, (err , res) => {

                         if(err) {
                             console.log(" Save profile file error : ", err)
                         }

                         if(res.getIssuccess()) {
                             this.sweetAlert.showMessage("Profile Image ", res.getMessage())
                         }

                    })

                } catch (e) {
                    console.log(" Save profile image error : ", e)
                }
              },
            launchWebSdk(accessToken, applicantEmail, applicantPhone) {
                let snsWebSdkInstance = snsWebSdk.init(
                    accessToken,
                    () => this.getNewAccessToken()
                )
                    .withConf({
                        lang: 'en',
                        email: applicantEmail,
                        phone: applicantPhone,
                        i18n: {"document":{"subTitles":{"IDENTITY": "Upload a document that proves your identity"}}},
                        onMessage: (type, payload) => {
                            console.log('WebSDK onMessage', type, payload)
                        },
                        uiConf: {
                            customCssStr: ":root {\n  --black: #000000;\n   --grey: #F5F5F5;\n  --grey-darker: #B2B2B2;\n  --border-color: #DBDBDB;\n}\n\np {\n  color: var(--black);\n  font-size: 16px;\n  line-height: 24px;\n}\n\nsection {\n  margin: 40px auto;\n}\n\ninput {\n  color: var(--black);\n  font-weight: 600;\n  outline: none;\n}\n\nsection.content {\n  background-color: var(--grey);\n  color: var(--black);\n  padding: 40px 40px 16px;\n  box-shadow: none;\n  border-radius: 6px;\n}\n\nbutton.submit,\nbutton.back {\n  text-transform: capitalize;\n  border-radius: 6px;\n  height: 48px;\n  padding: 0 30px;\n  font-size: 16px;\n  background-image: none !important;\n  transform: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s linear;\n}\n\nbutton.submit {\n  min-width: 132px;\n  background: none;\n  background-color: var(--black);\n}\n\n.round-icon {\n  background-color: var(--black) !important;\n  background-image: none !important;\n}"
                        },
                        onError: (error) => {
                            console.error('WebSDK onError', error)
                        },
                    })
                    .withOptions({ addViewportTag: false, adaptIframeHeight: true})
                    .on('stepCompleted', (payload) => {
                        console.log('stepCompleted', payload)
                    })
                    .on('onError', (error) => {
                        console.log('onError', error)
                    })
                    .onMessage((type, payload) => {
                        console.log('onMessage', type, payload)
                    })
                    .build();
                snsWebSdkInstance.launch('#sumsub-websdk-container')
            },
            // getNewAccessToken() {
            //     return Promise.resolve()
            // },
            GetNewAccessTokenForClient(){

                 try {


                     let request = new idcardprovider.IdCardCountryRequestMessage();
                     request.setCountrycode(this.countrycode)
                     request.setIdverifyprovidercode(this.idverifyprovidercode)
                     request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                     request.setMobileorweb("WEB")
                    this.showLoader = true

                     this.clientIdCardProvider.sumsubGetIDCardProviderAccessToken(request, this.$store.getters.metadata, (err , res) => {
                      this.showLoader = false
                         if(err) {
                             console.log( " Error from Id card server : ", err)
                         }
                           console.log(" Sumsub called : ", res)
                         if(res.getIssuccess()) {
                              this.sumsub.accesstoken = res.getAccesstoken()
                               this.sumsub.email = this.email
                               this.sumsub.phone = this.mobileNumber
                              this.launchWebSdk(this.sumsub.accesstoken,this.sumsub.email,this.sumsub.phone)
                         }else {
                             this.responseMessageID = res.getMessage()
                         }


                     })

                 }catch (e) {
                     console.log(" Errr : ",e)
                 }
            }

        },

        created() {
            this.clientcommonData = new commons.CommonDataSvcClient(grpcUrl.URL,null,null)
            this.clientIdCardProvider = new idcardprovider.IDCardProviderSvcClient(grpcUrl.URL,null,null)

             console.log(" List of providers : ", this.clientIdCardProvider)

             this.fullname = this.$store.getters.getUserInfo.firstName +" "+this.$store.getters.getUserInfo.lastName
            // this.GetProfileUploadCredentials()
             this.businessname = this.$store.getters.getUserInfo.businessName
             this.email = this.$store.getters.getUserInfo.emailAddress
             this.kycDataStatus = this.$store.getters.getUserInfo.kycDataStatus
             this.mobileNumber = this.$store.getters.getUserInfo.mobileNumber
             this.uploaded_image = this.$store.getters.getUserInfo.customerProfilePicImageUrl
               if(this.uploaded_image ===  null || this.uploaded_image === '') {
                   this.uploaded_image = require('@/assets/images/users/avatar.png')
               }
             this.GetSenderCountryList()
             this.sweetAlert = new SweetAlertWrapper()
        }
    }
</script>

<style scoped>
    #chagecolor {
        background-color: #0078D4;
    }
</style>