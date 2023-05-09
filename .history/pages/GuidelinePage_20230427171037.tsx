import { NextPage } from "next"
import Image from "next/image"
import styles from "/p-components/styles/guidelinePage.module.css"
import guidelineOnion from "/public/guidelineOnion.png"
import casperWithFace from "/public/casperWithFace.png"
import router from "next/router"
const GuidelinePage: NextPage = () => {
  const redirectoIndex = () => {
    router.push("/startPage")
  }

  return (
    <div className={styles.guidelinePage_body}>
      <div className={styles.guidelinePage_Top}>
        <h1 className={styles.h1}>
          YAY! We're excited to have you onboard! {"<3"}
        </h1>
      </div>
      <div className={styles.onionImage}>
        <div className={styles.oniontext_div}>
          <h2 className={styles.onionText}>
            ...before we get started <br /> we want you to read our <br />{" "}
            guidelines
          </h2>
        </div>
        <Image src={guidelineOnion} alt={"Picture is unavailable"} />
      </div>
      <div className={styles.casperWithFace}>
        <Image
          src={casperWithFace}
          alt={"Picture is unavailable"}
          className=" w-80"
        />
        <h1 className={styles.casper_h1}>
          Community <br /> guidelines
        </h1>
      </div>

      <div className={styles.guideline_rules_right}>
        <h2 className={styles.guideline_h2}>Be respecful</h2>
        <p>
          Please be kind and respectful to others. Harassment and bullying are
          not allowed - we're committed to creating a safe and welcoming space
          for everyone!
        </p>
      </div>

      <div className={styles.guideline_rules_left}>
        <h2 className={styles.guideline_h2}>Be yourself</h2>
        <p className={styles.guideline_p}>
          Please don't pretend to be someone else or create fake accounts - we
          may remove your posts and issue a warning. Feel free to be yourself
          and share your awesomeness with us!
        </p>
      </div>

      <div className={styles.guideline_rules_right}>
        <h2 className={styles.guideline_h2}>Show care</h2>
        <p>
          Our community is diverse, which means others may have different
          thoughts and opinions. Let's celebrate these differences with empathy
          and an open mind!
        </p>
      </div>
      <div className={styles.guideline_rules_center}>
        <h2 className={styles.guideline_h2}>Share with others</h2>

        <p className={styles.guideline_p_center}>
          Don't be afraid to show your true self and share your passion- it's
          the best way to make lasting connections with others. So go ahead and
          let your personality shine through.
        </p>
      </div>
      <div className={styles.fieldset_div}>
        <fieldset className={styles.guideline_fieldset_bottom}>
          <p className={styles.fieldset_p}>
            We stand firmly against hate speech of any kind. Failure in treating
            our community users with respect or engaging in either racism,
            homophobia, ableism, sexism or any other kind of discrimination,
            will result in your post being deleted and a warning.
          </p>
        </fieldset>
      </div>
      <div className={styles.button_div}>
        <button onClick={redirectoIndex} className={styles.button}>
          Get started!
        </button>
      </div>
    </div>
  )
}

export default GuidelinePage
