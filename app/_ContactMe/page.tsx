"use client";
import Link from "next/link";
import { useState } from "react";
import axios from 'axios';
import { Toaster, toast } from 'sonner';

export default function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [git, setgit] = useState<string>('000000')
    const [linkedin, setlink] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('/api/sendEmail', { name, email, message });

            toast.success('Message sent successfully!', {
                position: 'bottom-right',
                duration: 3000,
            });

            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            toast.error('Failed to send message.', {
                position: 'bottom-right',
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contactme"
            className="min-h-screen flex justify-center items-center flex-col gap-6 sm:gap-8 md:gap-10 py-16 sm:py-20 px-4"
        >

            {/* Badge */}
            <div className="gap-2 flex justify-center items-center px-4 py-2 ring-2 ring-[#22c35d40] rounded-full bg-[#22c35d15] text-[#22c35d] text-xs sm:text-sm">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/22c35d/chat-message--v1.png" alt="chat-message--v1" />
                Milestones
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center" style={{ fontWeight: "600" }}>
                Let's Build Something{" "}
                <span
                    className="bg-clip-text text-transparent font-bold"
                    style={{
                        backgroundImage: " linear-gradient(90deg, #f45a33 0%, #8347EA 55%, #248CF3 75% , #22C3AD 100%)",
                        fontWeight: "600"
                    }}
                >
                    Meaningful
                </span>
            </h1>

            {/* Subtitle */}
            <div className="text-sm sm:text-base md:text-lg text-gray-500 text-center max-w-2xl">
                Have a project in mind or just want to chat? I'd love to hear from you.
            </div>

            {/* Main Content */}
            <div className="flex flex-col xl:flex-row justify-center items-stretch gap-8 lg:gap-10 w-full lg:w-[70%] xl:w-[70%] 2xl:w-auto">

                {/* LEFT SIDE */}
                <div className="w-full 2xl:w-[45%] flex flex-col gap-5">

                    {/* Contact Info Card */}
                    <div className="p-5 flex flex-col gap-5 rounded-2xl ring-2 ring-[#f45a3330] w-full bg-gradient-to-br from-[#f45a3310] to-[#22C3AD10]">

                        <div className="flex flex-col gap-2">
                            <div className="text-lg sm:text-xl font-bold">Contact Information</div>
                            <div className="text-sm sm:text-base text-gray-500">
                                Feel free to reach out through any of these channels. I typically respond within 24 hours.
                            </div>
                        </div>

                        <div className="flex bg-white p-4 sm:p-5 ring-2 ring-[#00000015] shadow-md rounded-2xl hover:cursor-pointer hover:ring-[#f45a3350] transition-all duration-100 ease-in-out hover:shadow-xl">
                            <div className="bg-[#f45a3320] flex justify-center items-center p-3 rounded-xl">
                                <img width="25" height={25} src="https://img.icons8.com/ios/50/f45a33/mail.png" alt="No Image Available" />
                            </div>
                            <div className="flex flex-col gap-1 px-4 sm:px-5">
                                <div className="font-bold">Email</div>
                                <div className="text-gray-500 text-sm sm:text-base break-all">
                                    work.akshaykapoor24@gmail.com
                                </div>
                            </div>
                        </div>

                        <div className="flex bg-white p-4 sm:p-5 ring-2 ring-[#00000015] shadow-md rounded-2xl">
                            <div className="bg-[#22c3ad20] flex justify-center items-center p-3 rounded-xl">
                                <img width="25" height="25" src="https://img.icons8.com/ios/50/22c3ad/marker--v1.png" alt="marker--v1" />
                            </div>
                            <div className="flex flex-col gap-1 px-4 sm:px-5">
                                <div className="font-bold">Location</div>
                                <div className="text-gray-500 text-sm sm:text-base">Delhi , India</div>
                            </div>
                        </div>

                    </div>

                    {/* Social Card */}
                    <div className="p-5 flex flex-col gap-5 rounded-2xl ring-2 ring-[#8347EA30] w-full bg-gradient-to-br from-[#8347EA10] to-[#ED5EA510]">

                        <div className="flex flex-col gap-2">
                            <div className="text-lg sm:text-xl font-bold">Connect with me</div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">

                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={'https://github.com/AkshayKapoor024'}
                                onMouseEnter={() => setgit('ffffff')}
                                onMouseLeave={() => { setgit('000000') }}
                                className="flex justify-center items-center gap-3 font-semibold bg-[#00000010] w-full sm:w-[48%] py-3 sm:py-4 rounded-xl ring-2 ring-[#00000030] transition-all duration-100 ease-in hover:bg-black hover:text-white"
                            >
                                <img width="30" height="30" src={`https://img.icons8.com/ios-filled/50/${git}/github.png`} alt="github" />
                                GitHub
                            </Link>

                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={'https://www.linkedin.com/in/kapoorakshay24'}
                                className="flex justify-center items-center gap-3 font-semibold bg-[#248CF320] text-[#248cf3] w-full sm:w-[48%] py-3 sm:py-4 rounded-xl ring-2 ring-[#248cf340] transition-all duration-100 ease-in hover:bg-[#248cf3] hover:text-white"
                            >
                                <img width="30" height="30" src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin" />
                                Linkedin
                            </Link>

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <form onSubmit={handleSubmit} className="w-full 2xl:w-[45%] py-8 sm:py-10 flex flex-col gap-4 sm:gap-5 shadow-xl items-center ring-2 ring-[#00000010] rounded-2xl p-5 bg-white">

                    <div className="font-semibold w-full text-sm sm:text-base">Your Name</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full bg-[#00000008] p-4 sm:p-5 rounded-xl ring-2 ring-[#00000015]" required />

                    <div className="font-semibold w-full text-sm sm:text-base">Your Email</div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@example.com" className="w-full bg-[#00000008] p-4 sm:p-5 rounded-xl ring-2 ring-[#00000015]" required />

                    <div className="font-semibold w-full text-sm sm:text-base">Your Message</div>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project..."
                        className="w-full bg-[#00000008] p-4 sm:p-5 rounded-xl ring-2 ring-[#00000015] min-h-[120px]"
                    />

                    <button
                        type="submit" disabled={loading}
                        className={`bg-[#f45a33] flex justify-center items-center w-full sm:w-[80%] text-white gap-3 font-bold py-3 rounded-xl shadow-xl transition-all duration-100 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f45a3399]'} `}>
                        <img width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/paper-plane--v1.png" alt="paper-plane--v1" />
                        {loading === true ? 'Sending Message...' : 'Send Message'}</button>
                </form>

            </div>
            <Toaster richColors position="bottom-right" />

        </section>
    );
}
