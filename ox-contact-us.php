<?php
/**
 * Created by PhpStorm.
 * User: Mr Flash
 * Date: 6/8/2017
 * Time: 9:56 AM
 */
require_once('ox-header.php');
?>
<div class="row margin-bottom-60">

    <div class="col-lg-4">

        <div class="card">
            <img src="ox-imgs/logo.png" alt="Picture of ">

            <div class="card-block contact-profile__container">
                <div class="contact-profile__social-icons">
                    <a class="contact-profile__social-icon" href="" target="_self">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a class="contact-profile__social-icon" href="" target="_self">
                        <i class="fa fa-twitter-square"></i>
                    </a>
                    <a class="contact-profile__social-icon" href="" target="_self">
                        <i class="fa fa-youtube-square"></i>
                    </a>
                    <a class="contact-profile__social-icon" href="" target="_self">
                        <i class="fa fa-github-square"></i>
                    </a>
                </div>
                <!-- /.contact-profile__social-icons -->
                <div class="contact-profile__items">
                    <div class="contact-profile__item">
                        <div class="contact-profile__icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <p class="contact-profile__text">
                            Office 30 Lyndhurst Place<br/>
                            Cnr JHB & Kenrick Road<br/>
                            Lyndhurst, Johannesburg
                        </p>
                    </div>
                    <div class="contact-profile__item">
                        <div class="contact-profile__icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <p class="contact-profile__text">
                            +27 11 026 4937<br/>
                            +27 848 951 847
                        </p>
                    </div>
                    <div class="contact-profile__item">
                        <div class="contact-profile__icon">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <p class="contact-profile__text">
                            oxelectrical@gmail.com<br/>
                            info@oxelect.co.za
                        </p>
                    </div>
                    <div class="contact-profile__item">
                        <div class="contact-profile__icon">
                            <i class="fa fa-compass"></i>
                        </div>
                        <p class="contact-profile__text">
                            www.oxelect.co.za
                        </p>
                    </div>
                </div>
                <!-- /.contact-profile__items -->
            </div>
            <!-- /.card-block -->
        </div>
        <!-- /.card -->

    </div>
    <!-- /.col -->

    <div class="col-lg-8">

        <div role="form" class="contact">

            <form method="post" action="mail-to-ox.php" class="contact-form aSubmit" novalidate="true">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
									<span class="contact-form-control-wrap name">
										<input name="username" value="" size="40"
                                               class="contact-form-control contact-text contact-validates-as-required form-control"
                                               aria-required="true" aria-invalid="false" placeholder="Name *"
                                               type="text" required="">
									</span>
                    </div>
                    <div class="col-xs-12 col-md-6">
									<span class="contact-form-control-wrap surname">
										<input name="phone" value="" size="40"
                                               class="contact-form-control contact-text contact-validates-as-required form-control"
                                               aria-required="true" aria-invalid="false" placeholder="Phone *"
                                               type="text" required="">
									</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
									<span class="contact-form-control-wrap email">
										<input name="email" value="" size="40"
                                               class="contact-form-control contact-text contact-email contact-validates-as-required contact-validates-as-email form-control"
                                               aria-required="true" aria-invalid="false" placeholder="E-mail *"
                                               type="email" required="">
									</span>
                    </div>
                    <div class="col-xs-12 col-md-6">
									<span class="contact-form-control-wrap service">
										<input name="service" value="" size="40"
                                               class="contact-form-control contact-text form-control"
                                               aria-invalid="false" placeholder="Service *" type="text"
                                               required="required">
									</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
									<span class="contact-form-control-wrap your-message">
										<textarea name="message" cols="40" rows="10"
                                                  class="contact-form-control contact-textarea form-control"
                                                  aria-invalid="false" placeholder="Your Message *"
                                                  required=""></textarea>
									</span>

                        <p></p>

                        <div class="contact-notice">All fields with * are obligatory</div>
                        <p>
                            <input value="SEND MESSAGE" class="contact-form-control contact-submit btn btn-primary"
                                   type="submit">
                        </p>
                    </div>
                </div>
            </form>

        </div>

    </div>
    <!-- /.col -->

</div><!-- /.row -->

<div class="row margin-bottom-100">

    <div class="col-md-9">
        <iframe class="actAsDiv" style="width:100%;" frameborder="0" scrolling="no"
                marginheight="0" marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.5210851183107!2d28.103208829199126!3d-26.12879289896695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdaf6fad9aa241f68!2sLyndhurst+Place!5e0!3m2!1sen!2sza!4v1496421962242"></iframe>


    </div>
    <!-- /.col -->

    <div class="col-md-3">

        <div class="time-table">
            <h3><span class="icon icons-ornament-left"></span>
                Opening Time
                <span class="icon icons-ornament-right"></span>
            </h3>

            <div class="inner-bg">
                <dl class="week-day ">
                    <dt>Monday</dt>
                    <dd>8:00-16:00</dd>
                </dl>
                <dl class="week-day light-bg">
                    <dt>Tuesday</dt>
                    <dd>8:00-16:00</dd>
                </dl>
                <dl class="week-day">
                    <dt>Wednesday</dt>
                    <dd>8:00-16:00</dd>
                </dl>
                <dl class="week-day light-bg">
                    <dt>Thursday</dt>
                    <dd>8:00-16:00</dd>
                </dl>
                <dl class="week-day">
                    <dt>Friday</dt>
                    <dd>8:00-16:00</dd>
                </dl>
                <dl class="week-day light-bg">
                    <dt>Saturday</dt>
                    <dd>Closed</dd>
                </dl>
                <dl class="week-day  today">
                    <dt>Sunday</dt>
                    <dd>Closed</dd>
                </dl>
            </div>
        </div>

    </div>
    <!-- /.col -->

</div><!-- /.row -->
<?php
require_once('ox-footer.php');
?>
<p id="ps" style="visibility: hidden;">Get in touch with us</p>