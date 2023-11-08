import React from "react";

import { Box, Container, Typography } from "@mui/material";
import img from "../assets/home.png";
import Header from "../components/Header";
const Community = () => {
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
            Community Guidelines
          </Typography>
          <p style={{ paddingLeft: "10px" }}>
            Welcome to Luvsi!
            <br />
            Luvsi is where meaningful connections can happen. It Starts With a
            Swipe™. Sometimes you click. Sometimes you don’t. And sometimes the
            talking leads to more. Opportunity is overflowing. Possibilities are
            endless. All (adults) are welcome to come explore. We want Luvsi to
            be a fun, safe and inclusive space where anyone can be themselves
            while getting to know others. That’s what these Community Guidelines
            are for–to set expectations for everyone’s behavior, both on and off
            of the app. So read on; not following these guidelines can have real
            consequences-from a nudge to a ban.
          </p>
          <Typography
            variant="h5"
            sx={{ fontFamily: "sans-serif", fontWeight: "600" }}
          >
            Luvsi's Rules:
          </Typography>
          <p>
            <span style={{ fontWeight: "800" }}>Consider boundaries.</span>{" "}
            Comfort levels vary person to person. That’s why we don’t allow
            nudity, sexual content, sexual desires, or looking for sex on your
            public profile. If you are in a private conversation, these are okay
            if everyone is okay with it. Consent matters.
          </p>
          <br />
          <p>
            <span style={{ fontWeight: "800" }}>
              Share cautiously and thoughtfully.
            </span>
            Don’t publicly broadcast your personal information or ways for
            people to connect with you (no public displays of things like phone
            numbers, emails, or social handles). Sharing out your bank account
            numbers or email password is always a bad idea. Don’t ask others to
            send you their personal details either. Be cautious when sending
            money to other people. Or maybe don’t at all.
          </p>
          <br />
          <p>
            Steer clear of violent content. We promote positivity and won’t
            tolerate any sort of violent content that contains gore, death,
            images or descriptions of violent acts (against humans or animals),
            use of weapons, and anything advocating or glorifying self-harm.
          </p>

          <p>
            Make personal connections, not biz ones. Don’t advertise, promote,
            share your social handles to gain followers, sell stuff, fundraise,
            or campaign. This also means Luvsi isn’t the place for any sort of
            sex work, escort services, or compensated relationships. So,
            no–don’t use Luvsi to find your sugarmamma.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Be Wary of Long Distance and Overseas Relationships
          </Typography>
          <p>
            ust be you. People want to meet the real you. Not your fake persona.
            Don’t create a fake account or pretend to be someone you’re not,
            even if it’s just for fun.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Report All Suspicious and Offensive Behavior
          </Typography>
          <p>
            Communicate Respectfully. Talking to new people can be tricky,
            especially when you’re interacting with humans from all walks of
            life. Respect goes a long way.
          </p>

          <p>
            Be sure to pick a strong password, and always be careful when
            logging into your account from a public or shared computer. Luvsi
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
          <p>
            Take your time and get to know the other person before agreeing to
            meet or chat off Luvsi. Don’t be afraid to ask questions to screen
            for any red flags or personal dealbreakers. A phone or video call
            can be a useful screening tool before meeting.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Meet in Public and Stay in Public
          </Typography>
          <p>
            Meet for the first few times in a populated, public place — never at
            your home, your date’s home, or any other private location. If your
            date pressures you to go to a private location, end the date.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Tell Friends and Family About Your Plans
          </Typography>
          <p>
            Tell a friend or family member of your plans, including when and
            where you’re going. Have your cell phone charged and with you at all
            times.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Be in Control of Your Transportation
          </Typography>
          <p>
            We want you to be in control of how you get to and from your date so
            that you can leave whenever you want. If you’re driving yourself,
            it’s a good idea to have a backup plan such as a ride-share app or a
            friend to pick you up.
          </p>
          <Typography variant="h6" sx={{ fontFamily: "sans-serif" }}>
            * Know Your Limits
          </Typography>
          <p>
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

export default Community;
