import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const Image = styled.img`
  width: 40;
  height: 40px;
`;

const NumberedList = styled.ol`
  list-style: upper-alpha;
`;

const NumberedListItem = styled.li`
  &::marker {
    font-family: "Roboto";
    font-size: 24px;
  }
`;

const Paladin = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography color={pink[300]} variant="h3">
          <Image
            src="https://wow.zamimg.com/images/wow/icons/large/classicon_paladin.jpg"
            alt="Paladin"
          ></Image>
          Paladin
        </Typography>
        <Box>
          <Typography color={pink[300]} variant="h4">
            <Image
              src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg"
              alt="Holy"
            ></Image>
            Holy
          </Typography>
          <Box>
            <NumberedList>
              <NumberedListItem>
                <Typography variant="h5">Crowd Control</Typography>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_sealofmight.jpg"
                      alt="Hammer of Justice"
                    ></Image>
                    Hammer of Justice
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box>DR: Stun 6s</Box>
                    <Box>1min CD, around 30s using Fist of Justice talent</Box>
                    <Box>Dispellable: magic type</Box>
                    <p>
                      Use
                      <ul>
                        <li>Stun healer mostly</li>
                      </ul>
                    </p>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/ability_paladin_blindinglight.jpg"
                      alt="Blinding Light"
                    ></Image>
                    Blinding Light
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box>DR: Disorient 6s</Box>
                    <Box>1.5mins CD</Box>
                    <Box>Dispellable: magic type</Box>
                    <p>
                      Use
                      <ul>
                        <li>Maybe good in 2's for Enemy double dps</li>
                        <li>Good in 3's</li>
                        <li>Used on WW images/ DK with pet</li>
                      </ul>
                    </p>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_prayerofhealing.jpg"
                      alt="Repentance"
                    ></Image>
                    Repentance
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box>DR: Incapacitate 8s</Box>
                    <Box>15s CD</Box>
                    <Box>Dispellable: magic type</Box>
                    <p>
                      Use
                      <ul>
                        <li>Stun + Rep</li>
                        <li>When you can't be interupted if possible</li>
                        <li>
                          Can't be used against druid/shaman in animal form
                        </li>
                        <li>Good in 2's for Enemy Healer + Dps comp</li>
                        <li>Don't take with Hunter in comp, DR's trap</li>
                        <li>Use VS Enemy HPal</li>
                      </ul>
                    </p>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/ability_paladin_turnevil.jpg"
                      alt="Turn Evil"
                    ></Image>
                    Turn Evil
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box>DR: Disorient 6s</Box>
                    <Box>15s CD</Box>
                    <Box>Dispellable: magic type</Box>
                    <p>
                      Use
                      <ul>
                        <li>
                          For undead (DK pet, Lichborne), demon (Lock pets) and
                          *aberration
                        </li>
                      </ul>
                    </p>
                  </Typography>
                </Box>
              </NumberedListItem>
              <NumberedListItem>
                <Typography variant="h5">Offensive Cooldowns</Typography>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_sealofsacrifice.jpg"
                      alt="Blessing of Sacrifice"
                    ></Image>
                    Blessing of Sacrifice
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_sealofprotection.jpg"
                      alt="Blessing of Protection"
                    ></Image>
                    Blessing of Protection
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_avenginewrath.jpg"
                      alt="Avenging Wrath"
                    ></Image>
                    Avenging Wrath
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_auramastery.jpg"
                      alt="Aura Mastery"
                    ></Image>
                    Aura Mastery
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">
                    <Image
                      src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_layonhands.jpg"
                      alt="Lay on Hands"
                    ></Image>
                    Lay on Hands
                  </Typography>
                </Box>
              </NumberedListItem>
              <NumberedListItem>
                <Typography variant="h5">Defensive Cooldowns</Typography>
              </NumberedListItem>
              <NumberedListItem>
                <Typography variant="h5">Utilities</Typography>
              </NumberedListItem>
            </NumberedList>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Paladin;
