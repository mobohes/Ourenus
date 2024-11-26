import { Grid, ThemeProvider, CssBaseline } from "@mui/material";
import LogoBox from "./components/LogoBox";
import UserBox from "./components/UserBox";
import UsageBox from "./components/UsageBox";
import Apps from "./components/Apps";
import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import getTheme from "./theme/Theme";
import Configs from "./components/Configs";
import LanguageIcon from "@mui/icons-material/Language";
import GetInfoRequest from "./utils/GetInfoRequest";
import { ClipLoader } from "react-spinners";
import {
  calculateRemainingTime,
  calculateUsedTimePercentage,
  formatTraffic,
} from "./utils/Helper";
import { ToastContainer } from "react-toastify";
import RadioButtons from "./components/RadioButtons";
import { Helmet } from "react-helmet";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  const [dataLinks, setDataLinks] = useState([]);

  useEffect(() => {
    GetInfoRequest.getInfo()
      .then((res) => {
        setData(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (data?.links) {
      const links =
        data.links[data.links.length - 1] === "False"
          ? data.links.slice(0, -1)
          : data.links;
      setDataLinks(links);
    } else {
      GetInfoRequest.getConfigs().then((res) => {
        const decodedLinks = decodeBase64(res.data.trim());
        const configArray = decodedLinks ? decodedLinks.split("\n") : [];
        setDataLinks(
          configArray[configArray.length - 1] === "False"
            ? configArray.slice(0, -1)
            : configArray
        );
      });
    }
  }, [data?.links]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>
          {data?.username ? `${data.username} Sub Info` : "Ourenus Sub Info"}
        </title>
        <meta
          name="description"
          content="Powered by https://github.com/mobohes"
        />
      </Helmet>
      <Grid
        container
        justifyContent={"center"}
        justifySelf={"center"}
        item
        xs={11.5}
        sm={7}
        md={6}
        lg={5}
        xl={3.5}
      >
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <ClipLoader size={50} color="#3498db" loading={loading} />
          </div>
        ) : (
          data && (
            <>
              <RadioButtons
                setIsDarkMode={setIsDarkMode}
                handleLanguageChange={handleLanguageChange}
              />
              <LogoBox />
              <UserBox data={data} />
              <UsageBox
                type="usage"
                value={Number(
                  ((data?.used_traffic / data?.data_limit) * 100).toFixed(2)
                )}
                total={formatTraffic(data?.data_limit, t)}
                remaining={
                  data?.data_limit === null
                    ? formatTraffic(null, t)
                    : formatTraffic(data?.data_limit - data?.used_traffic, t)
                }
              />
              <UsageBox
                type="time"
                value={calculateUsedTimePercentage(
                  data?.expire || data?.expire_date
                )}
                remaining={calculateRemainingTime(
                  data?.expire || data?.expire_date,
                  t
                )}
              />
              <Apps />
              <Configs
                title={t("configsList")}
                style={{
                  direction: lang === "fa" ? "rtl" : "ltr",
                  background: theme.colors.configs[theme.palette.mode],
                  boxShadow: "0 0 30px 10px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  border:
                    theme.palette.mode === "light"
                      ? "1px solid #ffffff6b"
                      : "none",
                  borderRadius: "16px",
                  paddingY: ".4rem",
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255)"
                      : "rgb(0 0 0)",
                }}
                iconColor={theme.colors.configs.revert[theme.palette.mode]}
                icon={
                  <LanguageIcon
                    fontSize="large"
                    sx={{
                      marginInlineStart: "1rem",
                      color: theme.colors.configs.revert[theme.palette.mode],
                    }}
                  />
                }
                configs={dataLinks}
                btnStyle={{
                  cursor: "pointer",
                  borderRadius: "30%",
                  padding: ".3rem",
                  background: "#c7becb61",
                  "&:hover": {
                    background: "#887890",
                  },
                }}
                liStyle={{
                  background: theme.colors.glassColor,
                }}
              />
            </>
          )
        )}
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ marginTop: "1rem", borderRadius: "16px" }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default App;

function decodeBase64(encodedString) {
  try {
    const decodedString = atob(encodedString);
    return decodedString;
  } catch (error) {
    console.error("Failed to decode base64:", error);
    return "";
  }
}
