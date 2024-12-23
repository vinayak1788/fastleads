import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/detail.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.cardContainer}>
          {/* Form Section */}
          <div className={styles.formGrid}>
            {/* Left Column */}
            <div>
              <label htmlFor="campaignName" className={styles.label}>
                Content Name<span className={styles.requiredMarker}>*</span>
              </label>
              <input
                type="text"
                id="campaignName"
                placeholder="Enter Campaign Name"
                className={styles.input}
              />
            </div>

            {/* Right Column */}
            <div>
              <label htmlFor="contentCategory" className={styles.label}>
                Content Category<span className={styles.requiredMarker}>*</span>
              </label>
              <select id="contentCategory" className={styles.select}>
                <option>Select Category</option>
                <option>project-1</option>
                <option>project-2</option>
                <option>project-3</option>
              </select>
            </div>
          </div>

          {/* Text and Post to Section */}
          <div className={styles.contentSection}>
            {/* Textarea */}
            <div className={styles.textAreaContainer}>
              <label htmlFor="textContent" className={styles.label}>
                Text
              </label>
              <textarea
                id="textContent"
                placeholder="Enter your text and links...."
                rows={6}
                className={styles.textarea}
              ></textarea>
            </div>

            {/* Post to Section */}
            <div className={styles.postToContainer}>
              <label className={styles.label}>
                Post to
              </label>
              <div className={styles.socialMediaTags}>
                {/* Social Media Tags */}
                <span className={styles.socialTag}>
                  <FaLinkedin className={styles.socialIcon} /> Linkedin
                  <button className={styles.removeTagButton}>&times;</button>
                </span>
                <span className={styles.socialTag}>
                  <FaFacebook className={styles.socialIcon} /> Facebook
                  <button className={styles.removeTagButton}>&times;</button>
                </span>
                <span className={styles.socialTag}>
                  <FaTwitter className={styles.socialIcon} /> Twitter
                  <button className={styles.removeTagButton}>&times;</button>
                </span>
                <span className={styles.socialTag}>
                  <FaInstagram className={styles.socialIcon} /> Instagram
                  <button className={styles.removeTagButton}>&times;</button>
                </span>
                <span className={styles.socialTag}>
                  <FaYoutube className={styles.socialIcon} /> YouTube
                  <button className={styles.removeTagButton}>&times;</button>
                </span>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className={styles.buttonSection}>
            <button
              className={styles.cancelButton}
              onClick={() => router.push('/Contentpush')}
            >
              Cancel
            </button>
            <Link href="/Adformat">
              <button className={styles.nextButton}>
                Next <span className={styles.nextButtonArrow}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
