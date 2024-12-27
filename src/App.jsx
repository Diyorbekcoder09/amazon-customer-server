import './App.css';
import rasm1 from "./assets/images/main_img1.png"
import rasm2 from "./assets/images/main_img2.png"
import rasm3 from "./assets/images/main_img3.png"
import rasm4 from "./assets/images/main_img4.png"
import rasm5 from "./assets/images/main_img5.png"
import rasm6 from "./assets/images/main_img6.png"
import rasm7 from "./assets/images/main_img7.png"
import rasm8 from "./assets/images/main_img8.png"
import rasm9 from "./assets/images/min_img9.png"
import rasm10 from "./assets/images/main_img10.png"
import rasm11 from "./assets/images/main_img11.png"
import rasm12 from "./assets/images/main_img12.png"
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';


function App() {

  const [index, setIndex] = useState(0);

  return (
    <div className="app">
      <main className="main">
        <div className="main_cards">
          <div className="main_card">
            <img src={rasm1} alt="" className="main_img" />
            <p className="main_card_text">A delivery, order or return</p>
          </div>
          <div className="main_card">
            <img src={rasm2} alt="" className="main_img" />
            <p className="main_card_text">eBooks, Prime Videos, Music, or Games</p>
          </div>
          <div className="main_card">
            <img src={rasm3} alt="" className="main_img" />
            <p className="main_card_text">Prime</p>
          </div>
          <div className="main_card">
            <img src={rasm4} alt="" className="main_img" />
            <p className="main_card_text">Payment, charges or gift cards</p>
          </div>
          <div className="main_card">
            <img src={rasm5} alt="" className="main_img" />
            <p className="main_card_text">Address, security & privacy</p>
          </div>
          <div className="main_card">
            <img src={rasm6} alt="" className="main_img" />
            <p className="main_card_text">Address, security & privacy</p>
          </div>
          <div className="main_card">
            <img src={rasm7} alt="" className="main_img" />
            <p className="main_card_text">Kindle, Fire, Alexa, or other Amazon devices
            </p>
          </div>
          <div className="main_card">
            <img src={rasm8} alt="" className="main_img" />
            <p className="main_card_text">eBooks, Prime Videos, Music, or Games
            </p>
          </div>
          <div className="main_card">
            <img src={rasm9} alt="" className="main_img" />
            <p className="main_card_text">Accessibility</p>
          </div>
          <div className="main_card">
            <img src={rasm10} alt="" className="main_img" />
            <p className="main_card_text">Something else</p>
          </div>
          <div className="main_card">
            <img src={rasm11} alt="" className="main_img" />
            <p className="main_card_text">Login & password</p>
          </div>
          <div className="main_card">
            <img src={rasm12} alt="" className="main_img" />
            <p className="main_card_text">Report Something Suspicious</p>
          </div>
        </div>
      </main>
      <div className="container">
        <p className="text">Search our help library</p>
        <form className='form'>
          <CiSearch className="search" />
          <input type="text" required placeholder='Type something like, "question about a  charge' className='input' />
        </form>
        <p className="text2">All help topics</p>

        <div className="menu_group">

          <div className="menu_title">
            <p className={index === 0 ? "active menu_text" : "menu_text"} onClick={() => setIndex(0)}

            >Take Quick Actions</p>
            <p className={index === 1 ? "active menu_text" : "menu_text"} onClick={() => setIndex(1)}
            >Where's my stuff</p>
            <p className={index === 2 ? "active menu_text" : "menu_text"} onClick={() => setIndex(2)}>Shipping and Delivery</p>
            <p className={index === 3 ? "active menu_text" : "menu_text"} onClick={() => setIndex(3)}>Returns, Refunds and Product Support</p>
            <p className={index === 4 ? "active menu_text" : "menu_text"} onClick={() => setIndex(4)}>Managing Your Account</p>
            <p className={index === 5 ? "active menu_text" : "menu_text"} onClick={() => setIndex(5)}>Security & Privacy</p>
            <p className={index === 6 ? "active menu_text" : "menu_text"} onClick={() => setIndex(6)}>Payment, Pricing and Promotions</p>
            <p className={index === 7 ? "active menu_text" : "menu_text"} onClick={() => setIndex(7)}>Devices & Digital Solutions</p>
            <p className={index === 8 ? "active menu_text" : "menu_text"} onClick={() => setIndex(8)}>Amazon Business Accounts</p>
            <p className={index === 9 ? "active menu_text" : "menu_text"} onClick={() => setIndex(9)}>Large Items and Heavy-Bulky Services</p>
            <p className={index === 10 ? "active menu_text" : "menu_text"} onClick={() => setIndex(10)}>Other topics & Help sites</p>
          </div>

          <div className="menu_cards">
            <div className="box1 " hidden={index !== 0}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Track your package</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Return Items You Ordered</p>
                  <p className="card_text2">Return your orders using our Online Return Center.</p>
                </div>
                <div className="card">
                  <p className="card_text">Check status of a refund</p>
                  <p className="card_text2">Track your return and refunds in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Update Your Password</p>
                  <p className="card_text2">Update your password in Your account.</p>
                </div>
                <div className="card">
                  <p className="card_text">Amazon Prime</p>
                  <p className="card_text2">Get detailed information on all Prime benefits.</p>
                </div>
                <div className="card">
                  <p className="card_text">End Your Amazon Prime Membership</p>
                  <p className="card_text2">Cancel your membership easily via this page.</p>
                </div>
                <div className="card">
                  <p className="card_text">Ads in Prime Video</p>
                  <p className="card_text2">Prime Video movies and TV shows will include limited advertisements. For further details, click here.</p>
                </div>
              </div>
            </div>
            <div className="box2" hidden={index !== 1}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Carrier Contact Information</p>
                  <p className="card_text2">Find the contact information of your delivery carriers.</p>
                </div>
                <div className="card">
                  <p className="card_text">Track your package</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Find a missing package that shows as "Delivered"</p>
                  <p className="card_text2">Actions you can take when your order shows as "delivered" but you don't have your package</p>
                </div>
                <div className="card">
                  <p className="card_text">Undeliverable Packages</p>
                  <p className="card_text2">Learn what to do when your package cannot be delivered.</p>
                </div>
                <div className="card">
                  <p className="card_text">Find a missing item from your package</p>
                  <p className="card_text2">Check why your item is missing from your package.</p>
                </div>
                <div className="card">
                  <p className="card_text">Missing Tracking Information</p>
                  <p className="card_text2">Learn why sometimes tracking information might not be available.</p>
                </div>
                <div className="content_card2"><p className="card_text2">More in Where's my Stuffs</p></div>
              </div>
            </div>
            <div className="box3" hidden={index !== 2}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Delivery Guarantees</p>
                  <p className="card_text2">Learn more about our guaranteed delivery offer.</p>
                </div>
                <div className="card">
                  <p className="card_text">Amazon Prime Shipping Benefits</p>
                  <p className="card_text2">Check the shipping benefits included in your Prime membership.</p>
                </div>
                <div className="card">
                  <p className="card_text">Shipping Rates and Times</p>
                  <p className="card_text2">Have a look at shipping rates and times, domestic as well as global, all at once.</p>
                </div>
                <div className="card">
                  <p className="card_text">Amazon Pickup Locations</p>
                  <p className="card_text2">Learn more about Amazon's pick up alternatives to doorstep delivery.</p>
                </div>
                <div className="content_card3">
                  <p className="card_text">More information on Shipping and Delivery</p>
                </div>
              </div>
            </div>
            <div className="box4" hidden={index !== 3}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Carrier Contact Information</p>
                  <p className="card_text2">Find the contact information of your delivery carriers.</p>
                </div>
                <div className="card">
                  <p className="card_text">Track your package</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Find a missing package that shows as "Delivered"</p>
                  <p className="card_text2">Actions you can take when your order shows as "delivered" but you don't have your package</p>
                </div>
                <div className="card">
                  <p className="card_text">Undeliverable Packages</p>
                  <p className="card_text2">Learn what to do when your package cannot be delivered.</p>
                </div>
                <div className="card">
                  <p className="card_text">Find a missing item from your package</p>
                  <p className="card_text2">Check why your item is missing from your package.</p>
                </div>
                <div className="card">
                  <p className="card_text">Missing Tracking Information</p>
                  <p className="card_text2">Learn why sometimes tracking information might not be available.</p>
                </div>
                <div className="content_card2"><p className="card_text2">More in Returns and Refunds</p></div>
              </div>
            </div>
            <div className="box5" hidden={index !== 4}>

              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Two-Step Verification</p>
                  <p className="card_text2">Find the contact information of your delivery carriers.</p>
                </div>
                <div className="card">
                  <p className="card_text">Add and Manage Addresses</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Two-Step Verification</p>
                  <p className="card_text2">Actions you can take when your order shows as "delivered" but you don't have your package</p>
                </div>
                <div className="card">
                  <p className="card_text">Undeliverable Packages</p>
                  <p className="card_text2">Learn what to do when your package cannot be delivered.</p>
                </div>
                <div className="card">
                  <p className="card_text">View Your Gift Card Balance</p>
                  <p className="card_text2">Check why your item is missing from your package.</p>
                </div>
                <div className="card">
                  <p className="card_text">Request the Closure of Your Account and the Deletion of Your</p>
                  <p className="card_text2">Learn why sometimes tracking information might not be available.</p>
                </div>
                <div className="content_card2"><p className="card_text2">More in Managing Your Account  </p></div>

              </div>


            </div>
            <div className="box6" hidden={index !== 5}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Amazon.com Privacy Notice</p>
                </div>
                <div className="card">
                  <p className="card_text">Conditions of Use</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Unknown Charges"</p>
                  <p className="card_text2">Actions you can take when your order shows as "delivered" but you don't have your package</p>
                </div>
                <div className="card">
                  <p className="card_text">Undeliverable Packages</p>
                  <p className="card_text2">Learn what to do when your package cannot be delivered.</p>
                </div>
                <div className="card">
                  <p className="card_text">Identifying Whether an Email, Phone Call, Text Message, or</p>
                  <p className="card_text2">Check why your item is missing from your package.</p>
                </div>
                <div className="card">
                  <p className="card_text">Report Something Suspicious</p>
                  <p className="card_text2">Learn why sometimes tracking information might not be available.</p>
                </div>
                <div className="content_card2"><p className="card_text2">More in Security & Privacy  </p></div>
              </div>
            </div>
            <div className="box7" hidden={index !== 6}>

              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Amazon.com Privacy Notice</p>
                  <p className="card_text2">Find the contact information of your delivery carriers.</p>
                </div>
                <div className="card">
                  <p className="card_text">Conditions of Use</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Unknown Charges"</p>
                  <p className="card_text2">Actions you can take when your order shows as "delivered" but you don't have your package</p>
                </div>
                <div className="card">
                  <p className="card_text">Undeliverable Packages</p>
                  <p className="card_text2">Learn what to do when your package cannot be delivered.</p>
                </div>
                <div className="card">
                  <p className="card_text">Identifying Whether an Email, Phone Call, Text Message, or </p>
                  <p className="card_text2">Check why your item is missing from your package.</p>
                </div>
                <div className="card">
                  <p className="card_text">Report Something Suspicious</p>
                  <p className="card_text2">Learn why sometimes tracking information might not be available.</p>
                </div>
                <div className="content_card2"><p className="card_text2">More in Security & Privacy</p></div>
              </div>

            </div>
            <div className="box8" hidden={index !== 7}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Get Kindle Book Order Refund</p>
                  <p className="card_text2">Cancel an accidental book order within seven days. Approved refunds are credited to the original payment source within three to five days.</p>
                </div>
                <div className="card">
                  <p className="card_text">Cancel Kindle Unlimited Subscription</p>
                  <p className="card_text2">Follow these steps to cancel your Kindle Unlimited membership.</p>
                </div>
                <div className="card">
                  <p className="card_text">Cancel Your Prime Video Add-On Subscription</p>
                  <p className="card_text2">Cancel your Prime Video add-on subscriptions online.</p>
                </div>
                <div className="card">
                  <p className="card_text">Cancel Prime Video Accidental Purchase</p>
                  <p className="card_text2">You are able to return a Prime Video order within 48 hours if you haven't attempted to watch or download it.</p>
                </div>
                <div className="card">
                  <p className="card_text">Cancel Music Unlimited Subscription</p>
                  <p className="card_text2">Cancel Music Unlimited Subscription</p>
                </div>
                <div className="card">
                  <p className="card_text">Issues While Playing Prime Video Titles</p>
                  <p className="card_text2">What to do when Prime Video titles won't play or if you see error codes such as 1007, 1022, 7003, 7005, 7031, 7135, 7202, 7203, 7204, 7206, 7207, 7230, 7250, 7251, 7301, 7303, 7305, 7306, 8020, 9003, 9074.</p>
                </div>
                <div className="card">
                  <p className="card_text">Install Prime Video on Your Devices</p>
                  <p className="card_text2">Using the Prime Video app you will be able to watch Prime Video.</p>
                </div>
                <div className="card">
                  <p className="card_text">Parental Controls on Prime Video</p>
                  <p className="card_text2"></p>
                </div>
                <div className="card">
                  <p className="card_text">Set Up a Prime Video PIN </p>
                  <p className="card_text2"></p>
                </div>
                <div className="card">
                  <p className="card_text">Can't Screen Mirror on Fire TV Devices
                  </p>
                  <p className="card_text2">To resolve most issues with screen mirroring, make sure that your device and Fire TV are compatible.</p>
                </div>
                <div className="card">
                  <p className="card_text">Manage Your Content & Devices</p>
                  <p className="card_text2"></p>
                </div>
                <div className="card">
                  <p className="card_text">
                    Ads in Prime Video</p>
                  <p className="card_text2">Prime Video movies and TV shows will include limited advertisements. For further details, click here.</p>
                </div>
                <div className="content_card2"><p className="card_text2">Ask the Digital & Device Community</p></div>
              </div>
            </div>
            <div className="box9" hidden={index !== 8}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Track your package</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Return Items You Ordered</p>
                  <p className="card_text2">Return your orders using our Online Return Center.</p>
                </div>
                <div className="card">
                  <p className="card_text">Check status of a refund</p>
                  <p className="card_text2">Track your return and refunds in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Update Your Password</p>
                  <p className="card_text2">Update your password in Your account.</p>
                </div>
                <div className="card">
                  <p className="card_text">Amazon Prime</p>
                  <p className="card_text2">Get detailed information on all Prime benefits.</p>
                </div>
                <div className="card">
                  <p className="card_text">End Your Amazon Prime Membership</p>
                  <p className="card_text2">Cancel your membership easily via this page.</p>
                </div>
                <div className="card">
                  <p className="card_text">Ads in Prime Video</p>
                  <p className="card_text2">Prime Video movies and TV shows will include limited advertisements. For further details, click here.</p>
                </div>
              </div>
            </div>
            <div className="box10" hidden={index !== 9}>

              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Carrier Contact Information</p>
                  <p className="card_text2">Find the contact information of your delivery carriers.</p>
                </div>
                <div className="card">
                  <p className="card_text">Track your package</p>
                  <p className="card_text2">Track your packages in Your Orders.</p>
                </div>
                <div className="card">
                  <p className="card_text">Find a missing package that shows as "Delivered"</p>
                  <p className="card_text2">Actions you can take when your order shows as "delivered" but you don't have your package</p>
                </div>
                <div className="card">
                  <p className="card_text">Undeliverable Packages</p>
                  <p className="card_text2">Learn what to do when your package cannot be delivered.</p>
                </div>
                <div className="card">
                  <p className="card_text">Find a missing item from your package</p>
                  <p className="card_text2">Check why your item is missing from your package.</p>
                </div>
                <div className="card">
                  <p className="card_text">Missing Tracking Information</p>
                  <p className="card_text2">Learn why sometimes tracking information might not be available.</p>
                </div>
                <div className="content_card3"><p className="card_text">More in Large Items and Heavy Bulky Services</p></div>
              </div>

            </div>
            <div className="box11" hidden={index !== 10}>
              <div className="card_content_group">
                <div className="card">
                  <p className="card_text">Gifts, Gift Cards, and Registries</p>
                </div>
                <div className="card">
                  <p className="card_text">Redeem a Gift Card</p>
                  <p className="card_text2">When you redeem an Amazon.com Gift Card or gift voucher to your account, the funds are stored in Your Account and will automatically apply to your next eligible order.</p>
                </div>
                <div className="content_card"><p className="card_text5">Site Features</p></div>
                <div className="content_card"><p className="card_text5">Ordering</p></div>
                <div className="content_card"><p className="card_text5">A-to-Z Guarantee</p></div>
                <div className="content_card"><p className="card_text5">Publisher & Vendor Help</p></div>
                <div className="content_card"><p className="card_text5">Amazon Games</p></div>
                <div className="content_card"><p className="card_text5">Amazon Physical Stores</p></div>
                <div className="content_card"><p className="card_text5">Amazon Pharmacy</p></div>
                <div className="content_card"><p className="card_text5">Amazon Fresh and Groceries on Amazon</p></div>
                <div className="content_card2"><p className="card_text2">Help for Amazon Sellers</p></div>
                <div className="content_card2"><p className="card_text2">Associates Program Help</p></div>
                <div className="content_card2"><p className="card_text2">Amazon Web Services</p></div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default App;
