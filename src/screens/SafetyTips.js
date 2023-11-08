import React from "react";
import { Box, Container, Typography } from "@mui/material";
import img from "../assets/home.png";
import Header from "../components/Header";
const SafetyTips = () => {
  return (
    <Container
      maxWidth="false"
      //   disableGutters
      sx={{
        p: { xs: 2, sm: 5, md: 2 },
        background: `url(${img}) center center/cover`,
        minHeight: "85vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderBottom: "2px solid white",
        }}
      >
        <Header elevation={2} style={{ borderBottom: "4px dotted blue" }} />
      </Box>
      <Container maxWidth="lg" sx={{ overflow: "auto" }}>
        <Box sx={{ bgcolor: "trasparent", mt: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "sans-serif", fontWeight: "600" }}
          >
            Dating Safety Tips
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Meeting new people is exciting, but you should always be cautious
            when interacting with someone you don’t know. Use your best judgment
            and put your safety first, whether you are exchanging initial
            messages or meeting in person. While you can’t control the actions
            of others, there are things you can do to help you stay safe during
            your Tinder experience.
          </p>
          <Typography
            variant="h5"
            sx={{ fontFamily: "sans-serif", fontWeight: "600" }}
          >
            Online Safety
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Never Send Money or Share Financial Information
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Never send money, especially over wire transfer, even if the person
            claims to be in an emergency. Wiring money is like sending cash —
            it’s nearly impossible to reverse the transaction or trace where the
            money went. Never share information that could be used to access
            your financial accounts. If another user asks you for money, report
            it to us immediately.
          </p>
          <br />
          <p style={{ paddingLeft: "10px", lineHeight: 0, marginTop: "0px" }}>
            For tips on avoiding romance scams, check out some advice from the
            U.S Federal Trade Commission on the FTC website.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Protect Your Personal Information
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Never share personal information, such as your social security
            number, home or work address, or details about your daily routine
            (e.g., that you go to a certain gym every Monday) with people you
            don’t know. If you are a parent, limit the information that you
            share about your children on your profile and in early
            communications. Avoid sharing details such as your children’s names,
            where they go to school, or their ages or genders.
          </p>

          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Stay on the Platform
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Keep conversations on the Tinder platform while you’re getting to
            know someone. Because exchanges on Tinder are subject to our Safe
            Message Filters (learn more here), users with bad intentions often
            try to move the conversation to text, messaging apps, email, or
            phone right away.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Be Wary of Long Distance and Overseas Relationships
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Watch out for scammers who claim to be from your country but stuck
            somewhere else, especially if they ask for financial help to return
            home. Be wary of anyone who will not meet in person or talk on a
            phone/video call—they may not be who they say they are. If someone
            is avoiding your questions or pushing for a serious relationship
            without meeting or getting to know you first — that’s a red flag.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Report All Suspicious and Offensive Behavior
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            You know when someone’s crossed the line and when they do, we want
            to know about it. Block and report anyone that violates our terms.
            Here are some examples of violations:
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Protect Your Account
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Be sure to pick a strong password, and always be careful when
            logging into your account from a public or shared computer. Tinder
            will never send you an email asking for your username and password
            information — if you receive an email asking for account
            information, report it immediately.
          </p>
          <Typography
            variant="h5"
            sx={{ fontFamily: "sans-serif", fontWeight: "600" }}
          >
            Meeting in Person
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Don’t Be In A Rush
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Take your time and get to know the other person before agreeing to
            meet or chat off Tinder. Don’t be afraid to ask questions to screen
            for any red flags or personal dealbreakers. A phone or video call
            can be a useful screening tool before meeting.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Meet in Public and Stay in Public
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Meet for the first few times in a populated, public place — never at
            your home, your date’s home, or any other private location. If your
            date pressures you to go to a private location, end the date.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Tell Friends and Family About Your Plans
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Tell a friend or family member of your plans, including when and
            where you’re going. Have your cell phone charged and with you at all
            times.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Be in Control of Your Transportation
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            We want you to be in control of how you get to and from your date so
            that you can leave whenever you want. If you’re driving yourself,
            it’s a good idea to have a backup plan such as a ride-share app or a
            friend to pick you up.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Know Your Limits
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Be aware of the effects of drugs or alcohol on you specifically —
            they can impair your judgment and your alertness. If your date tries
            to pressure you to use drugs or drink more than you’re comfortable
            with, hold your ground and end the date.
          </p>
        </Box>
      </Container>
    </Container>
  );
};

export default SafetyTips;
