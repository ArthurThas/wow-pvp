import styled from "@emotion/styled";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
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
                      alt="HoJ"
                    ></Image>
                    Hammer of Justice
                  </Typography>
                </Box>
              </NumberedListItem>
              <NumberedListItem>
                <Typography variant="h5">Offensive Cooldowns</Typography>
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
