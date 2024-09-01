import styles from "./DevicesSection.module.scss";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const DevicesSection = () => {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className={cx('register_heading', 'd-flex', 'justify-content-between')}>
          <div className={cx('device_heading')}>
            <h3>Choose the plan that's right for you</h3>
            <p>
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
        </div>
        <div className={cx('row', 'mt50', "device_group")}>
          <div className={cx("col-4", "devive_reposive")}>
            <div className={cx('device')}>
              <div className={cx('device_details', 'd-flex', 'align-items-center')}>
                <img
                  src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725119247/c21hcnRwaG9uZV9jZHBxY3M=/drilldown"
                  alt=""
                  className={cx('device_icon')}
                />
                <h3 className={cx('device_name')}>Smartphones</h3>
              </div>
              <p className={cx('device_title')}>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className={cx("col-4", "devive_reposive")}>
            <div className={cx('device')}>
              <div className={cx('device_details', 'd-flex', 'align-items-center')}>
                <img
                  src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725119247/dGFibGV0X3hnYXNvdQ==/drilldown"
                  alt=""
                  className={cx('device_icon')}
                />
                <h3 className={cx('device_name')}>Tablet</h3>
              </div>
              <p className={cx('device_title')}>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className={cx("col-4", "devive_reposive")}>
            <div className={cx('device')}>
              <div className={cx('device_details', 'd-flex', 'align-items-center')}>
                <img
                  src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725119247/c21hcnR0dl9jNnZuNWg=/drilldown"
                  alt=""
                  className={cx('device_icon')}
                />
                <h3 className={cx('device_name')}>Smart TV</h3>
              </div>
              <p className={cx('device_title')}>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className={cx("col-4", "devive_reposive")}>
            <div className={cx('device')}>
              <div className={cx('device_details', 'd-flex', 'align-items-center')}>
                <img
                  src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725119247/bGFwdG9wc19oYzlpd2k=/drilldown"
                  alt=""
                  className={cx('device_icon')}
                />
                <h3 className={cx('device_name')}>Laptops</h3>
              </div>
              <p className={cx('device_title')}>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                StoreStreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className={cx("col-4", "devive_reposive")}>
            <div className={cx('device')}>
              <div className={cx('device_details', 'd-flex', 'align-items-center')}>
                <img
                  src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725119247/Z2FtaW5nY29uc29sZXNfbDRpcGZi/drilldown"
                  alt=""
                  className={cx('device_icon')}
                />
                <h3 className={cx('device_name')}>Gaming Consoles</h3>
              </div>
              <p className={cx('device_title')}>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className={cx("col-4", "devive_reposive")}>
            <div className={cx('device')}>
              <div className={cx('device_details', 'd-flex', 'align-items-center')}>
                <img
                  src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725119247/dnJoZWFkc2V0X3NtdjUzOA==/drilldown"
                  alt=""
                  className={cx('device_icon')}
                />
                <h3 className={cx('device_name')}>VR Headsets</h3>
              </div>
              <p className={cx('device_title')}>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
