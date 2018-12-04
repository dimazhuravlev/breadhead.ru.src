import React from "react";
import { scroller } from "react-scroll";
import Case from "@site/features/case";
import VisibilitySensor from "react-visibility-sensor";
import { withNamespaces } from "@site/lib/i18n";
import { Desktop, Mobile, Any } from "@site/lib/responsive";
import Button from "@site/ui/molecules/Button";
import { PlusIcon } from "@site/ui/atoms/icons";

import styles from "./cases.css";
import cx from "classnames";

class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      isVisible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.scrollToButton = this.scrollToButton.bind(this);
    this.buttonRef = React.createRef();
  }

  onVisibilityChange = isVisible => {
    !this.state.isVisible && isVisible && this.setState({ isVisible });
  };

  scrollToButton(offset) {
    scroller.scrollTo("buttonToShow", {
      offset: offset
    });
  }

  handleClick() {
    let isShown;
    let y;
    this.setState(
      state => {
        isShown = state.isShown;
        y = this.buttonRef.current.getBoundingClientRect().y;
        return {
          isShown: !state.isShown
        };
      },
      () => {
        if (isShown) {
          this.scrollToButton(-y);
        }
      }
    );
  }

  render() {
    const { isShown, isVisible } = this.state;
    const { t, casesDataDesktop, casesDataMobile } = this.props;

    const allCasesDesktop = casesDataDesktop.map(caseData => (
      <Case key={caseData.description.name} {...caseData} />
    ));

    const allCasesMobile = casesDataMobile.map(caseData => (
      <Case key={caseData.description.name} {...caseData} />
    ));

    const firstShowCasesDesktop = allCasesDesktop.slice(0, 3);
    const firstShowCasesMobile = allCasesMobile.slice(0, 3);
    return (
      <>
        <Desktop>
          <section
            className={cx(styles.cases, styles.desktopCases)}
            name="cases"
          >
            {isShown ? allCasesDesktop : firstShowCasesDesktop}
          </section>
        </Desktop>

        <Mobile>
          <section
            className={cx(styles.cases, styles.mobileCases)}
            name="cases"
          >
            {isShown ? allCasesMobile : firstShowCasesMobile}
          </section>
        </Mobile>

        <VisibilitySensor
          onChange={this.onVisibilityChange}
          partialVisibility
          delayedCall
        >
          <Any>
            <Button
              ref={this.buttonRef}
              name="buttonToShow"
              onClick={this.handleClick}
              className={cx(
                styles.plusButton,
                isVisible ? styles.visible : styles.inVisible,
                isShown ? styles.withoutIcon : null
              )}
              icon={isShown ? null : <PlusIcon />}
            >
              {isShown ? t("less-btn") : t("more-btn")}
            </Button>
          </Any>
        </VisibilitySensor>
      </>
    );
  }
}

export default withNamespaces(["common"])(Cases);
