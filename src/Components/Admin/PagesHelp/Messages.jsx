import React from "react";

export default function Messages() {
  return (
    <div class="dash-container">
      <div class="dash-content">
        <div class="page-header">
          <div class="page-block">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="page-header-title">
                  <h4 class="m-b-10"> Messenger</h4>
                </div>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="https://demo.rajodiya.com/erpgo-saas/account-dashboard">
                      Dashboard
                    </a>
                  </li>
                  <li class="breadcrumb-item">Messenger</li>
                </ul>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="messenger">
                  <div class="messenger-listView">
                    <div class="m-header">
                      <nav>
                        <nav class="m-header-right">
                          <a href="#" class="listView-x">
                            <i class="fas fa-times"></i>
                          </a>
                        </nav>
                      </nav>

                      <input
                        type="text"
                        class="messenger-search"
                        placeholder="Search"
                      />

                      <div class="messenger-listView-tabs">
                        <a href="#" class="active-tab" data-view="users">
                          {/* <svg
                            class="svg-inline--fa fa-clock fa-w-16"
                            title="Recent"
                            aria-labelledby="svg-inline--fa-title-JoqPdtylaC0E"
                            data-prefix="fas"
                            data-icon="clock"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <title id="svg-inline--fa-title-JoqPdtylaC0E">
                              Recent
                            </title>
                            <path
                              fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"
                            ></path>
                          </svg> */}
                        </a>
                        <a href="#" data-view="groups">
                          {/* <svg
                            class="svg-inline--fa fa-users fa-w-20"
                            title="Members"
                            aria-labelledby="svg-inline--fa-title-uU5Ic3YEEZcH"
                            data-prefix="fas"
                            data-icon="users"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            data-fa-i2svg=""
                          >
                            <title id="svg-inline--fa-title-uU5Ic3YEEZcH">
                              Members
                            </title>
                            <path
                              fill="currentColor"
                              d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                            ></path>
                          </svg> */}
                        </a>
                      </div>
                    </div>

                    <div class="m-body">
                      <div
                        class=" show  messenger-tab app-scroll"
                        data-view="users"
                      >
                        <div class="favorites-section">
                          <p class="messenger-title">Favorites</p>
                          <div class="messenger-favorites app-scroll-thin">
                            <div class="favorite-list-item">
                              <div 
                                class="avatar av-m"
                                // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-7.jpg');"
                              ></div>
                              <p>Rana B..</p>
                            </div>
                            <div class="favorite-list-item">
                              <div 
                                class="avatar av-m"
                                style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg');"
                              ></div>
                              <p>Richar..</p>
                            </div>
                            <div class="favorite-list-item">
                              <div 
                                class="avatar av-m"
                                // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-3.jpg');"
                              ></div>
                              <p>Buffy ..</p>
                            </div>
                            <div class="favorite-list-item">
                              <div 
                                class="avatar av-m"
                                // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-6.jpg');"
                              ></div>
                              <p>Maia</p>
                            </div>
                          </div>
                        </div>

                        <table class="messenger-list-item m-li-divider">
                          <tbody>
                            <tr data-action="0">
                              <td>
                                <div
                                  class="avatar av-m"
                                //   style="background-color: #D9EFFF; text-align: center;"
                                >
                                  <span
                                    class="ti ti-bookmark"
                                    // style="font-size: 22px; color: #6FD943;"
                                  ></span>
                                </div>
                              </td>

                              <td>
                                <p data-id="user_2">
                                  Saved Messages <span>You</span>
                                </p>
                                <span>Save messages secretly</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div
                          class="listOfContacts"
                        //   style="width: 100%;height: calc(100% - 200px);position: relative;"
                        >
                          <table class="messenger-list-item" data-contact="54">
                            <tbody>
                              <tr data-action="0">
                                <td style="position: relative">
                                  <div
                                    class="avatar av-m"
                                    // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-2.jpg');"
                                  ></div>
                                </td>

                                <td>
                                  <p data-id="user_54">
                                    Sonya Sims
                                    <span class="chat-time">6 hours ago</span>
                                  </p>
                                  <span class="chat-msg">
                                    <span class="lastMessageIndicator">
                                      You :
                                    </span>
                                    Hi
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            class="messenger-list-item m-list-active"
                            // data-contact="58"
                          >
                            <tbody>
                              <tr data-action="0">
                                <td style="position: relative">
                                  <div
                                    class="avatar av-m"
                                    // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-3.jpg');"
                                  ></div>
                                </td>

                                <td>
                                  <p data-id="user_58">
                                    Buffy Walter
                                    <span class="chat-time">1 month ago</span>
                                  </p>
                                  <span class="chat-msg">
                                    <span class="lastMessageIndicator">
                                      You :
                                    </span>
                                    <span class="ti ti-file"></span> Attachment
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table class="messenger-list-item" data-contact="66">
                            <tbody>
                              <tr data-action="0">
                                <td style="position: relative">
                                  <div
                                    class="avatar av-m"
                                    // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-7.jpg');"
                                  ></div>
                                </td>

                                <td>
                                  <p data-id="user_66">
                                    Rana Blanken..
                                    <span class="chat-time">2 months ago</span>
                                  </p>
                                  <span class="chat-msg">
                                    <span class="lastMessageIndicator">
                                      You :
                                    </span>
                                    <span class="ti ti-file"></span> Attachment
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table class="messenger-list-item" data-contact="8">
                            <tbody>
                              <tr data-action="0">
                                <td style="position: relative">
                                  <span class="activeStatus"></span>
                                  <div
                                    class="avatar av-m"
                                    // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg');"
                                  ></div>
                                </td>

                                <td>
                                  <p data-id="user_8">
                                    Richard Atki..
                                    <span class="chat-time">2 months ago</span>
                                  </p>
                                  <span class="chat-msg">
                                    <span class="lastMessageIndicator">
                                      You :
                                    </span>
                                    <span class="ti ti-file"></span> Attachment
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table class="messenger-list-item" data-contact="67">
                            <tbody>
                              <tr data-action="0">
                                <td style="position: relative">
                                  <div
                                    class="avatar av-m"
                                    // style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-6.jpg');"
                                  ></div>
                                </td>

                                <td>
                                  <p data-id="user_67">
                                    Maia
                                    <span class="chat-time">2 months ago</span>
                                  </p>
                                  <span class="chat-msg">
                                    <span class="lastMessageIndicator">
                                      You :
                                    </span>
                                    &amp;ldquo;Let me put you on hold..
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div
                        class="all_members  messenger-tab app-scroll"
                        data-view="groups"
                      >
                        <table class="messenger-list-item" data-contact="8">
                          <tbody>
                            <tr data-action="0">
                              <td >
                                <span class="activeStatus"></span>
                                <div
                                  class="avatar av-m"
                                //   style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-1.jpg');"
                                ></div>
                              </td>

                              <td>
                                <p data-id="user_8">Richard Atki..</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table class="messenger-list-item" data-contact="54">
                          <tbody>
                            <tr data-action="0">
                              <td  >
                                <div
                                  class="avatar av-m"
                                //   style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-2.jpg');"
                                ></div>
                              </td>

                              <td>
                                <p data-id="user_54">Sonya Sims</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table class="messenger-list-item" data-contact="58">
                          <tbody>
                            <tr data-action="0">
                              <td  >
                                <div
                                  class="avatar av-m"
                                //   style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-3.jpg');"
                                ></div>
                              </td>

                              <td>
                                <p data-id="user_58">Buffy Walter</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table class="messenger-list-item" data-contact="64">
                          <tbody>
                            <tr data-action="0">
                              <td style="position: relative">
                                <div
                                  class="avatar av-m"
                                //   style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-4.jpg');"
                                ></div>
                              </td>

                              <td>
                                <p data-id="user_64">Abel Callaha..</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table class="messenger-list-item" data-contact="65">
                          <tbody>
                            <tr data-action="0">
                              <td style="position: relative">
                                <span class="activeStatus"></span>
                                <div
                                  class="avatar av-m"
                                  style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-5.jpg');"
                                ></div>
                              </td>

                              <td>
                                <p data-id="user_65">Aileen Butle..</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
 
                      </div>

                      <div class=" messenger-tab app-scroll" data-view="search">
                        <p class="messenger-title">Search</p>
                        <div class="search-records">
                          <p class="message-hint center-el">
                            <span>Type to search..</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="messenger-messagingView">
                    <div class="m-header m-header-messaging">
                      <nav>
                        <div style="display: inline-flex;">
                          <a href="#" class="show-listView">
                            <i class="ti ti-arrow-left"></i>
                          </a>
                          <div
                            class="avatar av-s header-avatar"
                            // style='margin: -5px 10px; background-image: url("https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-3.jpg");'
                          ></div>
                          <a href="#" class="user-name">
                            Buffy Walter
                          </a>
                        </div>

                        <nav class="m-header-right">
                          <a
                            href="#"
                            id="image"
                            class="add-to-favorite favorite"
                            // style="display: inline;"
                          >
                            <i id="foo" class="fa fa-star"></i>
                          </a>
                          <a href="#" class="show-infoSide header-icon">
                            {/* <svg
                              class="svg-inline--fa fa-info-circle fa-w-16"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="info-circle"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                              ></path>
                            </svg> */}
                          </a>
                        </nav> 
                      </nav>
                    </div>

                    <div
                      class="internet-connection successBG-rgba"
                      style="display: none;"
                    >
                      <span class="ic-connected" style="display: inline;">
                        Connected
                      </span>
                      <span class="ic-connecting" style="display: none;">
                        Connecting...
                      </span>
                      <span class="ic-noInternet" style="display: none;">
                        Please add pusher settings for using messenger.
                      </span>
                    </div>

                    <div class="m-body app-scroll" style="opacity: 1;">
                      <div class="messages">
                        <div
                          class="message-card mc-sender"
                          data-id="2468784652"
                        >
                          <p>
                            Hello
                            <sub
                              title="2022-08-10 05:23:11"
                              class="message-time"
                            >
                              <span class="ti ti-check-double seen"></span> 2
                              months ago
                            </sub>
                          </p>
                        </div>

                        <div class="message-card" data-id="1840160215">
                          <p>
                            Hello ,
                            <sub title="2022-08-10 05:24:42">2 months ago</sub>
                          </p>
                        </div>

                        <div class="message-card" data-id="2291244384">
                          <p>
                            Fine, what about you.?
                            <sub title="2022-08-10 05:25:07">2 months ago</sub>
                          </p>
                        </div>

                        <div
                          class="message-card mc-sender"
                          data-id="2540430012"
                        >
                          <p>
                            fine, i am busy right now, i'll talk you later..
                            <sub
                              title="2022-08-10 05:25:36"
                              class="message-time"
                            >
                              <span class="ti ti-check-double seen"></span> 2
                              months ago
                            </sub>
                          </p>
                        </div>

                        <div
                          class="message-card mc-sender"
                          data-id="2322152566"
                        >
                          <p>
                            “I’m sorry, I don’t have the information on that.
                            May I have your email/phone number? I will find this
                            out with our accounting department and get back to
                            you shortly.”
                            <br />
                            <br />
                            “I’m sorry, this question would be out of my
                            expertise, but Daniel from the tech support
                            department will be able to he lp you. Would you like
                            me to connect you with him?”
                            <sub
                              title="2022-08-10 05:25:47"
                              class="message-time"
                            >
                              <span class="ti ti-check-double seen"></span> 2
                              months ago
                            </sub>
                          </p>
                        </div>

                        <div
                          class="message-card mc-sender"
                          data-id="1678902113"
                        >
                          <p>
                            tv.jpg
                            <sub
                              title="2022-09-27 10:35:36"
                              class="message-time"
                            >
                              <span class="ti ti-check seen"></span> 1 month ago
                            </sub>
                          </p>
                        </div>

                        <div>
                          <div class="message-card mc-sender">
                            <div
                              class="image-file chat-image"
                              style="width: 250px; height: 150px;background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/attachments/f9054179-cc5a-4427-a7c9-d6c5054329e0.jpg')"
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div class="typing-indicator">
                        <div class="message-card typing">
                          <p>
                            <span class="typing-dots">
                              <span class="dot dot-1"></span>
                              <span class="dot dot-2"></span>
                              <span class="dot dot-3"></span>
                            </span>
                          </p>
                        </div>
                      </div>

                      <div class="messenger-sendCard" style="display: block;">
                        <form
                          id="message-form"
                          method="POST"
                          action="https://demo.rajodiya.com/erpgo-saas/chats/sendMessage"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value="AGLw2Ix2CBymS7GSAHRxS4vM5vKHfPlc81TUst8k"
                          />
                          <label>
                            <i
                              style="margin-top: 65%"
                              class="fas fa-paperclip fa-sm"
                            ></i>
                            <input
                              type="file"
                              class="upload-attachment"
                              name="file"
                            />
                          </label>
                          <textarea
                            style="height: 39px; width: 92%; padding: 9px;"
                            name="message"
                            class="m-send app-scroll"
                            placeholder="Type a message.."
                          ></textarea>
                          <button>
                            <i class="fas fa-paper-plane fa-xs text-primary"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div class="messenger-infoView app-scroll text-center">
                    <nav>
                      <a href="#">
                        <i class="fas fa-times"></i>
                      </a>
                    </nav>
                    <div
                      class="avatar av-l"
                      style='background-image: url("https://demo.rajodiya.com/erpgo-saas/storage/uploads/avatar/user-3.jpg");'
                    ></div>
                    <p class="info-name">Buffy Walter</p>
                    <div class="messenger-infoView-btns">
                      <a
                        href="#"
                        class="danger delete-conversation"
                        style="display: inline;"
                      >
                        <i class="ti ti-trash"></i> Delete Conversation
                      </a>
                    </div>

                    <div
                      class="messenger-infoView-shared"
                      style="display: block;"
                    >
                      <p class="messenger-title">shared photos</p>
                      <div class="shared-photos-list">
                        <div
                          class="shared-photo chat-image"
                          style="background-image: url('https://demo.rajodiya.com/erpgo-saas/storage/attachments/f9054179-cc5a-4427-a7c9-d6c5054329e0.jpg')"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- [ Main Content ] end --> */}
      </div>
    </div>
  );
}
