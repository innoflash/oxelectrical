<footer>
    </div>
    <div class="footer-top">

        <div class="container">

            <div class="row">

                <div class="col-xs-12 col-md-4">
                    <div class="widget">
                        <img src="ox-imgs/logo.png" alt="Footer Logo">
                        <br><br>

                        <p>
                            OX Electrical is a small size and dynamic company based in Sandton. Your best one stop shop
                            for electrical solutions
                        </p>
                    </div>
                </div>
                <!-- /.col -->

                <div class="col-xs-12 col-md-2">
                    <div class="widget widget_nav_menu">
                        <h6 class="footer-top__headings">QUICK MENU</h6>
                        <ul class="menu">
                            <li>
                                <a href="index.php">Home</a>
                            </li>
                            <li>
                                <a href="ox-about.php">About Us</a>
                            </li>
                            <li>
                                <a href="ox-projects.php">Services</a>
                            </li>
                            <li>
                                <a href="ox-projects.php">Projects</a>
                            </li>
                            <li>
                                <a href="ox-contact-us.php">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <!-- /.widget -->
                </div>
                <!-- /.col -->

                <div class="col-xs-12 col-md-3">
                    <div class="widget widget_nav_menu">
                        <h6 class="footer-top__headings">OUR SERVICES</h6>

                        <div>
                            <ul class="menu">
                                <li>
                                    <a href="ox-services.php">Maintenance and Contracting</a>
                                </li>
                                <li>
                                    <a href="ox-services.php">
                                        Installation and Distribution
                                    </a>
                                </li>
                                <li>
                                    <a href="ox-services.php">
                                        Inspection
                                    </a>
                                </li>
                                <li>
                                    <a href="ox-services.php">
                                        Testing
                                    </a>
                                </li>
                                <li>
                                    <a href="ox-services.php">
                                        Installation Regulations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /.col -->

                <div class="col-xs-12 col-md-3">
                    <div class="widget">
                        <h6 class="footer-top__headings">CONTACT US</h6>

                        <p>
									<span class="icon-container">
										<span class="fa fa-map-marker"></span>
									</span>
                            Office 30 Lyndhurst Place,<br>
                            Cnr JHB & Kenrick Road, JHB<br>
									<span class="icon-container">
										<span class="fa fa-phone"></span>
									</span>
                            +27 11 026 4937<br>
									<span class="icon-container">
										<span class="fa fa-envelope"></span>
									</span>
                            <a href="mailto:oxelectrical@gmail.com">oxelectrical@gmail.com</a>
                            <br>
									<span class="icon-container">
										<span class="fa fa-globe"></span>
									</span>
                            www.oxelect.com
                        </p>

                        <p>
                            <a class="icon-container" href="" target="_self">
                                <span class="fa fa-facebook-square"></span>
                            </a>
                            <a class="icon-container" href="" target="_self">
                                <span class="fa fa-twitter-square"></span>
                            </a>
                            <a class="icon-container" href=""
                               target="_self">
                                <span class="fa fa-youtube-square"></span>
                            </a>
                        </p>
                    </div>
                </div>
                <!-- /.col -->

            </div>
            <!-- /.row -->

        </div>
        <!-- /.container -->

    </div>
    <!-- /.footer-top -->


    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom__left">
                Powered by <a href="https://itasolutions.co.za/">ITA Solutions</a>.
            </div>
            <div class="footer-bottom__right">
                All rights reserved.
            </div>
        </div>
    </div>
    <!-- /.footer-bottom -->

</footer>

</div>
<!-- /.boxed-container -->

<script src="ox-js/jquery-2.1.4.js"></script>
<script src="ox-js/modernizr.custom.24530.js"></script>
<script src="ox-js/picturefill.min.js"></script>
<script src="ox-js/underscore.min.js"></script>
<script src="ox-js/featherlight.js"></script>
<script src="ox-js/main.min.js"></script>
<script src="ox-js/active_class.js"></script>

<script>/* <![CDATA[ */
    (function (d, s, a, i, j, r, l, m, t) {
        try {
            l = d.getElementsByTagName('a');
            t = d.createElement('textarea');
            for (i = 0; l.length - i; i++) {
                try {
                    a = l[i].href;
                    s = a.indexOf('/cdn-cgi/l/email-protection');
                    m = a.length;
                    if (a && s > -1 && m > 28) {
                        j = 28 + s;
                        s = '';
                        if (j < m) {
                            r = '0x' + a.substr(j, 2) | 0;
                            for (j += 2; j < m && a.charAt(j) != 'X'; j += 2)s += '%' + ('0' + ('0x' + a.substr(j, 2) ^ r).toString(16)).slice(-2);
                            j++;
                            s = decodeURIComponent(s) + a.substr(j, m - j)
                        }
                        t.innerHTML = s.replace(/</g, '&lt;').replace(/\>/g, '&gt;');
                        l[i].href = 'mailto:' + t.value
                    }
                } catch (e) {
                }
            }
        } catch (e) {
        }
    })(document);
    /* ]]> */</script>
</body>
</html>