import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/format.module.css';

export default function Home() {
    const [selectedAlignment, setSelectedAlignment] = useState("left");
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [selectedColor, setSelectedColor] = useState("#000000");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [videoPreview, setVideoPreview] = useState(null);
    const [videoList, setVideoList] = useState([]); 
    const [selectedHeading, setSelectedHeading] = useState('Normal text'); 

    const selectTemplate = (template) => {
        setSelectedTemplate(template);
        setVideoPreview(null); 
        if (template !== "Template - 1") {
            setUploadedImage(null); // Reset uploaded image when switching templates
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleVideoChange = (e) => {
        const files = Array.from(e.target.files);
        const newVideos = files.map((file) => ({
            file,
            name: file.name,
            preview: URL.createObjectURL(file)
        }));
        setVideoList((prev) => [...prev, ...newVideos]);
    };

    const handleThumbnailClick = (video) => {
        setVideoPreview(video.preview); // Set the video preview
    };

    const handleVideoRemove = (index) => {
        setVideoList((prev) => {
            const updatedVideos = [...prev];
            updatedVideos.splice(index, 1);
            return updatedVideos;
        });
        if (videoPreview === videoList[index]?.preview) {
            setVideoPreview(null); // Clear the preview if the removed video is currently selected
        }
    };

    // Make sure this function is defined within the component's scope
    const getAlignmentIcon = () => {
        switch (selectedAlignment) {
            case "left":
                return <LeftIcon />;
            case "center":
                return <CenterIcon />;
            case "right":
                return <RightIcon />;
            case "justify":
                return <JustifyIcon />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <div className={`w-full max-w-6xl px-6 mb-4`}>
                <nav className={styles.nav}>
                    <span className={styles.active}>Details</span>
                    <span className="font-medium">Ad Format</span>
                    <span className="font-medium">Upload Assets</span>
                    <span className="font-medium">Preview & Launch</span>
                </nav>
            </div>

            <div className={styles.card}>
                <div className="mb-6">
                    <h1 className={styles.sectiontitle}>Select Format</h1>
                    <p className="text-gray-600 text-sm">Based on the billboards you've selected, the following ad formats are available for your ad campaign.</p>
                </div>

                <div className="flex">
                    <div className="flex flex-col space-y-4 w-1/3">
                        {["Template - 1", "Video Reels - 2", "Video Reels - 3", "Template - 4", "Template - 5"].map((template) => (
                            <div
                                key={template}
                                className={`${styles.template} ${selectedTemplate === template ? styles.selected : ""}`}
                                onClick={() => selectTemplate(template)}
                            >
                                <div className="w-20 h-14 bg-purple-200 rounded"></div>
                                <p className="text-sm font-medium text-gray-700">{template}</p>
                            </div>
                        ))}
                    </div>

                    {/* Content for the selected template displayed on the right side */}
                    <div className={`w-2/3 ml-6 ${styles.templatePanel}`}>
                        {selectedTemplate === "Template - 1" && (
                            <div className={styles.card}>
                                <div className={`flex items-center justify-between bg-gradient-to-r from-blue-200 to-purple-200 p-3 rounded-t-lg mb-2`}>
                                    <select 
                                        className={`border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 cursor-pointer`} 
                                        value={selectedHeading} 
                                        onChange={(e) => setSelectedHeading(e.target.value)}
                                    >
                                        <option value="Normal text">Normal text</option>
                                        <option value="Heading 1">Heading 1</option>
                                        <option value="Heading 2">Heading 2</option>
                                        <option value="Heading 3">Heading 3</option>
                                    </select>
                                    <div className={"relative"}>
                                        <button 
                                            onClick={toggleDropdown} 
                                            className={`flex items-center border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 bg-white`}
                                        >
                                            {getAlignmentIcon()}
                                        </button>
                                        {isDropdownOpen && (
                                            <div className={styles.alignDropdown}>
                                                <div className="flex flex-col">
                                                    {[
                                                        { value: "left", label: "Left", icon: <LeftIcon /> },
                                                        { value: "center", label: "Center", icon: <CenterIcon /> },
                                                        { value: "right", label: "Right", icon: <RightIcon /> },
                                                        { value: "justify", label: "Justify", icon: <JustifyIcon /> },
                                                    ].map((option) => (
                                                        <div
                                                            key={option.value}
                                                            className={`${styles.alignOption} ${selectedAlignment === option.value ? "bg-gray-200" : ""}`}
                                                            onClick={() => setSelectedAlignment(option.value)}
                                                        >
                                                            {option.icon}
                                                            <span className="ml-2">{option.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Bold, Italic, Underline and Color Picker */}
                                    <button className={`p-2 text-gray-600 hover:bg-gray-200 rounded font-bold ${isBold ? "bg-gray-300" : ""}`} onClick={() => setIsBold(!isBold)}>B</button>
                                    <button className={`p-2 text-gray-600 hover:bg-gray-200 rounded italic ${isItalic ? "bg-gray-300" : ""}`} onClick={() => setIsItalic(!isItalic)}>I</button>
                                    <button className={`p-2 text-gray-600 hover:bg-gray-200 rounded underline ${isUnderline ? "bg-gray-300" : ""}`} onClick={() => setIsUnderline(!isUnderline)}>U</button>
                                    <input type="color" className={`${styles.inputColor}`} value={selectedColor} onChange={handleColorChange} />
                                </div>
                                <div className={`${styles.previewCard} ${selectedAlignment} ${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderline ? "underline" : ""}`} style={{ color: selectedColor }}>
                                    <div>
                                        <h2 className={`mb-4 leading-snug ${selectedHeading === 'Heading 1' ? 'text-4xl' : selectedHeading === 'Heading 2' ? 'text-3xl' : selectedHeading === 'Heading 3' ? 'text-2xl' : 'text-base'}`}>
                                            Take your website to the <br /> next level
                                        </h2>
                                        <button className={`text-purple-500 font-medium py-2 px-6 rounded-lg hover:bg-purple-100 transition duration-300`}>Get Started</button>
                                    </div>

                                    <div className={`relative mt-8 ${styles.videoPreview}`}>
                                        {uploadedImage ? (
                                            <img src={uploadedImage} alt="Uploaded Preview" className="object-cover w-full h-full rounded-lg" />
                                        ) : (
                                            <div className="flex flex-col items-center">
                                                <p className="text-gray-500">No image uploaded yet.</p>
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 right-4">
                                            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} id="file-upload" />
                                            <label htmlFor="file-upload" className="cursor-pointer w-40 h-20 bg-purple-500 text-white text-sm font-bold round-lg shadow-lg flex items-center justify-center">
                                                <i className="fas fa-cloud-upload-alt mr-2 text-black opacity-90"></i>
                                                Upload Image
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.buttonContainer}>   
                                    <Link href="/Details">
                                        <button className={`${styles.button} ${styles.button.prev}`}><i className="fas fa-arrow-left mr-2"></i> Preview</button>
                                    </Link>
                                    <Link href="/upload">
                                        <button className={`${styles.button} ${styles.button.next}`}>Next <i className="fas fa-arrow-right ml-2"></i></button>
                                    </Link>
                                </div>
                            </div>
                        )}

                        {selectedTemplate === "Video Reels - 2" && (
                            <div className="w-2/3 ml-6 flex flex-col">
                                <div className="flex">
                                    <div className="flex flex-col space-y-4 w-1/4 bg-gray-100 p-4 rounded-l-lg">
                                        {videoList.length > 0 ? (
                                            videoList.map((video, index) => (
                                                <div key={index} className="relative">
                                                    <div 
                                                        className="h-20 w-full bg-purple-300 rounded cursor-pointer hover:bg-purple-400 transition flex items-center justify-center"
                                                        onClick={() => handleThumbnailClick(video)} // Selects video for preview on click
                                                    >
                                                        <div className="text-white">{video.name}</div>
                                                    </div>
                                                    <button 
                                                        className="absolute top-1 right-1 bg-purple-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                                                        onClick={() => handleVideoRemove(index)}
                                                    >
                                                        &times; {/* Remove Icon */}
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-500">No videos uploaded yet.</p>
                                        )}
                                        <div className="relative mt-4">
                                            <input
                                                type="file"
                                                accept="video/*"
                                                multiple
                                                className="hidden"
                                                onChange={handleVideoChange}
                                                id="video-upload"
                                            />
                                            <label
                                                htmlFor="video-upload"
                                                className="cursor-pointer bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition flex items-center justify-center"
                                            >
                                                <i className="fas fa-file-upload mr-2"></i>
                                                Upload Video
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-3/4 bg-white rounded-r-lg p-4">
                                        <div className="w-full h-64 bg-purple-100 rounded-lg shadow flex items-center justify-center">
                                            {videoPreview ? (
                                                <video controls className="w-full h-full rounded-lg">
                                                    <source src={videoPreview} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            ) : (
                                                <div className="text-gray-600 text-lg">Video Preview Screen</div>
                                            )}
                                        </div>
                                        {/* Other controls can be added as needed */}
                                        <div className="mt-4 text-gray-500">
                                            {/* General Video Quality Control Placeholder (e.g. Bitrate, Codec Selection) */}
                                            <label className="text-md font-semibold">Set Video Quality:</label>
                                            {/* Implement actual control logic here */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end w-full space-x-4 pr-6">   
                                    <Link href="/Details">
                                        <button className="bg-purple-200 text-purple-600 px-6 py-2 rounded-lg shadow hover:bg-purple-300 flex items-center transition">
                                            <i className="fas fa-arrow-left mr-2"></i> Preview
                                        </button>
                                    </Link>
                                    <Link href="/upload">
                                        <button className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-600 flex items-center transition">
                                            Next <i className="fas fa-arrow-right ml-2"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// SVG icon components
const LeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CenterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
    </svg>
);

const RightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6H4M20 12H4M20 18H4" />
    </svg>
);

const JustifyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);