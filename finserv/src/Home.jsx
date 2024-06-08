import React from 'react'
import { Link } from 'react-router-dom';

function Come() {

  return (
    <div>
        <div className='contai'>
        
        

        <main>
            <div className="main ">
                <div className="left">
                    
                    <h2 className='fw-bold'>NEWS Uncompared To Others</h2>
                    <p>Welcome to <b>Fuse</b>, your one-stop destination for all things finance. From market updates to investment tips, we've got the news and insights you need to stay informed and empowered. Let's navigate the world of finance together.</p>
                    <div className="">
                        <Link to="/stocks" id="start" href="#" style={{textDecoration:"None"}} className='me-2'>Stocks</Link>
                        <Link to="/crypto" id="take" href="#" style={{textDecoration:"None"}} className='ms-2'>Crypto</Link>
                    </div>
                </div>
                <div className="right">
                    <img src="nobg-logo.png" alt=""/>
                </div>
            </div>
        </main>

        <article>
            <div className="article ">
                <h1 className='fw-bold'> 
                    Trusted By The best
                </h1>
                <div className="compgrid" >
                    <div className="comp">
                        <img src="/google.jpg" alt=""/>
                        <p>Google</p>
                    </div>
                    <div className="comp">
                        <img src="microsoft.jpg" alt=""/>
                        <p>Microsoft</p>
                    </div>
                    <div className="comp">
                        <img src="linkedin.png" alt=""/>
                        <p>Linkedin</p>
                    </div>
                    <div className="comp">
                        <img src="facebook.jpeg" alt=""/>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </article>

        <h1 className='compe'>Our Competitive Advantage</h1>
        <p className='compe'>Our website stands out in the market by offering unique advantages, providing superior access to timely financial news, expert analysis, and intuitive features.</p>
        <div className="cardcontainer">
            
        
            
            <div className="box">
              <span></span>
              <div className="content">
                <h2>Interactive Features</h2>
                <p>Engage with customizable tools and join discussions in our vibrant financial community.</p>
                
              </div>
            </div>
    
    
            <div className="box">
              <span></span>
              <div className="content">
                <h2>Timely Updates</h2>
                <p>Access real-time financial news and stock market prices to stay informed of the latest developments.</p>
                
              </div>
            </div>
    
    
            <div className="box">
              <span></span>
              <div className="content">
                <h2>Comprehensive Coverage</h2>
                <p>Dive into diverse financial topics, including stocks, bonds, cryptocurrencies, and economic indicators, with detailed analysis.</p>               
              </div>
            </div>
    
            <div className="box">
                <span></span>
                <div className="content">
                  <h2>Expert Analysis</h2>
                  <p>Benefit from insights provided by our experienced financial journalists and industry professionals.</p>
                  
                </div>
            </div>
    
            <div className="box">
                <span></span>
                <div className="content">
                  <h2>User-Friendly Interface</h2>
                  <p>Provide exceptional customer support and assistance to customers.</p>
                 
                </div>
            </div>
    
            <div className="box">
                <span></span>
                <div className="content">
                  <h2>Mobile Accessibility</h2>
                  <p>Stay connected on the move with our mobile-optimized platform for anytime access.</p>
                  
                </div>
            </div>
    
        
        </div>
        

        <div>
            <div className="test">
                <br/>
                <h1 className='fw-bold'>What Others Say About Us</h1>
                <br/>
                <div className="testimonial">
                    
                    <div className="area">
                        <p>“This site is a gem for financial news. Informative articles and up-to-date market prices.A game-changer for investors. Trustworthy information and user-friendly interface"</p>
                        {/* <img src="..." alt=""/> */}
                        <h3>Sarah Johnson</h3>
                        <span>Investor</span>
                    </div>

                    <div className="area">
                        <p>“Navigating the financial landscape effortlessly with expert insights and up-to-the-minute data, empowering confident investment strategies .Highly recommended ”</p>
                        {/* <img src="..." alt=""/> */}
                        <h3>John Doe</h3>
                        <span>Financial Professional</span>
                    </div>

                    <div className="area">
                        <p>“This website is my go-to for finance news. Concise updates and reliable market data. Great tool for investors. Insightful analysis and easy navigation. op-notch financial insights ”</p>
                        {/* <img src="..." alt=""/> */}
                        <h3>Kevin Ruke</h3>
                        <span>Business Owner</span>
                    </div>

                    <div className="area">
                        <p>“Highly recommend for financial insights. Clear, concise articles and user-friendly interface.Impressive platform for staying informed. Engaging content and helpful analysis.”</p>
                            {/* <img src="..." alt=""/> */}
                        <h3>Maria Joseph</h3>
                        <span>Business Analyst</span>
                    </div>
                    
                    <div className="area">
                        <p>“Best financial news site out there. Comprehensive coverage and accurate market data.Essential for finance buffs. Clear updates, reliable data. Invaluable resource for investors”</p>
                        {/* <img src="..." alt=""/> */}
                        <h3>Joseph Alard</h3>
                        <span>University Student</span>
                    </div>  

                    <div className="area">
                        <p>
                        “An indispensable resource for financial enthusiasts, offering a wealth of expert analysis and up-to-the-minute market data. Essential tool for staying ahead in the market.”
                        </p>
                        {/* <img src="..." alt=""/> */}
                        <h3>Adam Kings</h3>
                        <span>Working Proffesional</span>
                    </div>

                   
                </div>
            </div>
        </div>

        <article className='mb-5'>
            <div className="new">
                <div className="news">
                    <div className="newright">
                        <img src="nobg-logo.png" alt=""/>
                    </div>
                        
                    <div className="newleft mt-3 pb-3">
                        <div className="updates">
                            <h1 className='fw-bold'>Get the latest updates</h1>
                            <span>Sign up for our newsletter</span>
                        </div>
    
                        <div className="mail">
                            
                            <input type="email" name="email" id="email" placeholder="Email"/>
                            <button type="submit">Send</button>
                        </div>
    
                        <div className="tnc">
                            By signing up to our newsletter you agree to our <span><button type="button" className="btn p-0 m-0 border-none bg-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Terms and Conidtion
                            </button></span> and <span><button type="button" className="btn p-0 m-0 border-none bg-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
        Privacy Policy
                </button></span>
                        </div>
                    </div>
                </div>
            </div>


                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Terms and Conditions</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <h2>Use of the Website</h2>
                                    <span>
                                    <h3><li>Access</li></h3> You may access and use the Website for your personal, non-commercial use only. You may not modify, reproduce, distribute, or otherwise exploit any content on the Website without prior written permission.
                                    <h3><li>User Accounts</li></h3> Some features of the Website may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                    <h3><li>Prohibited Activities</li></h3> You agree not to engage in any of the following prohibited activities:
                                    <li>Violating any applicable laws or regulations</li>
                                    <li>Interfering with or disrupting the operation of the Website. </li>
                                    <li>Uploading or transmitting viruses or any other malicious code. </li>
                                    <li>Impersonating another person or entity. </li>
                                    <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the Website. </li>
                                    </span><br />


                                    <h2>Intellectual Property</h2>
                                    <span>
                                    <h3><li>Ownership</li></h3> All content and materials on the Website, including text, graphics, logos, and images, are owned or licensed by Fuse and are protected by copyright and other intellectual property laws.
                                    <h3><li>Use of Content</li></h3> You may not use, reproduce, distribute, or display any content from the Website without prior written permission from Fuse.
                                    </span><br />



                                    <h2>Disclaimer of Warranties</h2>
                                    <h3>No Warranty</h3> The Website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Fuse makes no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content on the Website.

                                    


                                    <h2>Limitation of Liability</h2>
                                    <h3>No Liability</h3> Fuse shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way related to your use of the Website, whether based on contract, tort, negligence, strict liability, or any other legal theory.
                                    


                                    <h2>Indemnification</h2>
                                    <h3>Indemnity </h3> You agree to indemnify and hold harmless Fuse, its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms and Conditions or your use of the Website.
                                    

                                    <h2>Governing Law</h2>
                                    <h3>Jurisdiction</h3> These Terms and Conditions shall be governed by and construed in accordance with the laws of the country, without regard to its conflict of law provisions.

                                    <h2>Changes to These Terms and Conditions</h2>
                                    <h3>Modification</h3> Fuse reserves the right to modify or update these Terms and Conditions at any time without prior notice. Your continued use of the Website after any such changes constitutes your acceptance of the revised Terms and Conditions.

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Understood</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Privacy Policy</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h2>Information We Collect</h2><br />
                                        <span>
                                            <h3><li>Personal Information</li></h3> When you visit our website, we may collect certain personal information from you, such as your name, email address, and any other information you provide voluntarily when contacting us or subscribing to our newsletter.
                                            <h3><li>Usage Information</li></h3> We may automatically collect certain information about your device and how you interact with our website, such as your IP address, browser type, referring website, pages viewed, and the date and time of your visit.
                                        </span>


                                        <h2>How We Use Your Information</h2><br />
                                        <span>
                                            <h3><li>Providing Services</li></h3> We may use the information we collect to provide you with the services and features offered on our website, including delivering relevant financial news content, managing your account, and responding to your inquiries.
                                            <h3><li>Communications</li></h3> We may use your contact information to communicate with you about our services, updates, promotions, and other relevant information. You may opt-out of receiving these communications at any time.
                                            <h3><li>Analytics</li></h3> We may use the information collected to analyze trends, track user activity, and improve the overall user experience on our website.
                                        </span>



                                        <h2>Data Sharing and Disclosure</h2><br />
                                        <span>
                                        <h3><li>Third-Party Service Providers</li></h3> We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. These service providers are contractually obligated to use your information only for the purposes of providing services to us and are bound by confidentiality obligations.
                                        <h3><li>Legal Compliance</li></h3> We may disclose your information if required to do so by law or in response to valid legal requests, such as subpoenas or court orders. 
                                        </span>
                                        


                                        <h2>Data Security</h2>
                                        <p>We take reasonable measures to protect the security of your personal information and use industry-standard security technologies and procedures to safeguard it from unauthorized access, use, or disclosure.</p>
                                        
                                        <h2>Third-Party Links</h2>
                                        <p>Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or content of these third-party sites and encourage you to review their privacy policies before providing any personal information.</p>

                                        
                                        <h2>Changes to This Policy</h2>
                                        <p>We may update this Privacy Policy from time to time, and any changes will be reflected on this page. We encourage you to review this Privacy Policy periodically for any updates or changes.</p>

                                        </div>
                                        
                                        
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Understood</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            
            
        </article>
            
        


        <div className="accordion w-75 mx-auto  p-2" id="regularAccordionRobots" style={{background: "#a7a7a7",opacity: "0.6",marginBottom:"200px"}}>
            <h1 className='text-light'>FAQ'S</h1>
            <div className="accordion-item">
                <h2 id="regularHeadingFirst" className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFirst" aria-expanded="false" aria-controls="regularCollapseFirst">
                How often is the website updated with new content?
                </button>
                </h2>
                <div id="regularCollapseFirst" className="accordion-collapse collapse" aria-labelledby="regularHeadingFirst" data-bs-parent="#regularAccordionRobots">
                <div className="accordion-body">
                We update our website with fresh content daily to ensure you have the latest news and market insights at your fingertips.
                </div>
                </div>
            </div>

            <div className="accordion-item "> 
                <h2 className="accordion-header" id="regularHeadingSecond">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseSecond" aria-expanded="false" aria-controls="regularCollapseSecond">
                    Can I access the website on mobile devices?

                </button>
                </h2>
                <div id="regularCollapseSecond" className="accordion-collapse collapse" aria-labelledby="regularHeadingSecond" data-bs-parent="#regularAccordionRobots">
                <div className="accordion-body">
                Yes, our website is optimized for mobile viewing, allowing you to stay connected and informed on the go.
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 id="regularHeadingThird" className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseThird" aria-expanded="false" aria-controls="regularCollapseThird">
                    Do I need to pay to access the content on the website?
                </button>
                </h2>
                <div id="regularCollapseThird" className="accordion-collapse collapse" aria-labelledby="regularHeadingThird" data-bs-parent="#regularAccordionRobots">
                <div className="accordion-body">
                No, our website offers free access to all users. Simply visit the site to explore our articles, market updates, and resources without any subscription fees.
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 id="regularHeadingFourth" className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFourth" aria-expanded="false" aria-controls="regularCollapseFourth">
                    How reliable are the stock market prices displayed on the website?
                </button>
                </h2>
                <div id="regularCollapseFourth" className="accordion-collapse collapse" aria-labelledby="regularHeadingFourth" data-bs-parent="#regularAccordionRobots">
                <div className="accordion-body">
                We source our stock market data from reputable financial institutions and exchanges to ensure accuracy and reliability.
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 id="regularHeadingFifth" className="accordion-header">
                <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFifth" aria-expanded="false" aria-controls="regularCollapseFifth">
                    How can I contact customer support if I have questions or issues?
                </button>
                </h2>
                <div id="regularCollapseFifth" className="accordion-collapse collapse" aria-labelledby="regularHeadingFifth" data-bs-parent="#regularAccordionRobots">
                <div className="accordion-body">
                You can reach out to our customer support team via email or through our contact form on the website. We're here to assist you with any inquiries or concerns you may have.
                </div>
                </div>
            </div>

        </div>


      
       
        
    </div>
    </div>
  )
}

export default Come ;