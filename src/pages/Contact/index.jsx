import React from "react";

const Contact = () => {
    return (
        <div>
            <div
                style={{
                    height: "230px",
                    width: "100%",
                    backgroundImage: "url(/category-img.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className='container-fluid py-3 mx-auto'>
                <div className='crumb-box flex h-10 items-center justify-between items-center'>
                    <ul className='crumb'>
                        <li>
                            <a href='https://biomassvina.com'>Home</a>
                        </li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='grid md:grid-cols-5 md:gap-16 xs-s:gap-10 mt-4'>
                    <div className='md:col-span-3 xs-s:w-full'>
                        <div>
                            <h1 className='text-2xl'>Office</h1>
                            <div className='mt-4 flex items-center'>
                                <span className='mr-3 rounded-full bg-white w-7 h-7 min-w-[28px] flex items-center justify-center text-green-700'>
                                    <i className='fa fa-home' />
                                </span>
                                <div>
                                    <p>BIOMASS VINA CO. LTD.,</p>
                                    <p>
                                        VNST Building, BTSL2-2, Tan Tay Do new
                                        urban area, Tan Lap, Dan Phuong, Hanoi,
                                        Vietnam
                                    </p>
                                </div>
                            </div>
                            <div className='mt-3 flex items-center'>
                                <span className='mr-3 rounded-full bg-white w-7 h-7 min-w-[28px] flex items-center justify-center text-green-700'>
                                    <i className='fa fa-phone' />
                                </span>
                                <div>0968151073</div>
                            </div>
                            <div className='mt-3 flex items-center'>
                                <span className='mr-3 rounded-full bg-white w-7 h-7 min-w-[28px] flex items-center justify-center text-sm text-green-700'>
                                    <i className='fa fa-envelope-o' />
                                </span>
                                <div>
                                    info@biomassvina.com and
                                    sale@biomassvina.com
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-2xl'>Factory</h1>
                            <div className='mt-4 flex items-center'>
                                <span className='mr-3 rounded-full bg-white w-7 h-7 min-w-[28px] flex items-center justify-center text-green-700'>
                                    <i className='fa fa-home' />
                                </span>
                                <div>
                                    <p>N/A</p>
                                </div>
                            </div>
                            <div className='mt-3 flex items-center'>
                                <span className='mr-3 rounded-full bg-white w-7 h-7 min-w-[28px] text-sm flex items-center justify-center text-green-700'>
                                    <i className='fa fa-envelope-o' />
                                </span>
                                <div>
                                    info@biomassvina.com and
                                    sale@biomassvina.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-2 xs-s:w-full'>
                        <h2 className='text-2xl'>Contact</h2>
                        <form
                            className='formAjax'
                            action='https://biomassvina.com/contacts'
                            method='POST'
                        >
                            <input
                                type='hidden'
                                name='_token'
                                defaultValue='Vcc6xfYXS0JqAOYRo4DZjxkVYOCfSckLUVy6ruKJ'
                            />{" "}
                            <div className='mt-3'>
                                <input
                                    name='contact[fullname]'
                                    placeholder='Name(*)'
                                    required=''
                                    id='fullname'
                                    className='w-full px-3 py-2 rounded border hover:border-slate-700'
                                    defaultValue=''
                                />
                            </div>
                            <div className='mt-4'>
                                <input
                                    name='contact[phone]'
                                    placeholder='Phone(*)'
                                    required=''
                                    className='w-full px-3 py-2 rounded border hover:border-slate-700'
                                    defaultValue=''
                                />
                            </div>
                            <div className='mt-4'>
                                <input
                                    name='contact[email]'
                                    placeholder='Email'
                                    className='w-full px-3 py-2 rounded border hover:border-slate-700'
                                    defaultValue=''
                                />
                            </div>
                            <div className='mt-4'>
                                <textarea
                                    name='contact[messages]'
                                    placeholder='Notes'
                                    rows={3}
                                    className='w-full px-3 py-2 rounded border hover:border-slate-700'
                                    defaultValue={""}
                                />
                            </div>
                            <div className='mt-5'>
                                <button className='rounded bg-sky-600 text-white p-2 px-5 hover:bg-sky-400'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full mt-5 xs-s:overflow-auto'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.535927196035!2d105.7021123!3d21.0772955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134556559811873%3A0xf0b7b2595e39210!2sBiomass%20Vina!5e0!3m2!1svi!2s!4v1676447789682!5m2!1svi!2s'
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
