import { Container,Grid,Typography } from "@mui/material";
import "./Skill.css";

export default function Skills(params) {
    return(
<>
    <div style={{ textAlign: 'center', color: "#FFD1DC" }}>
        <Container>
        <button class="butto" data-text="Awesome">
    <span class="actual-text">&nbsp;Skills&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Skills&nbsp;</span>
</button>
<br/><br/><br/><br/>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div class="notification">
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div className="notititle">Web Development</div>
                        <div className="notibody">
                            <p>Proficient in HTML, CSS, JavaScript</p>
                            <p>Experience with front-end framework React.js</p>
                            <p>Familiarity with back-end technologies such as Node.js,Flask andDjango</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div class="notification">
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div className="notititle">App Development</div>
                        <div className="notibody">
                            <p>Skilled in mobile app development using React Native</p>
                            <p>Experience in building cross-platform applications for iOS and Android</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div class="notification">
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div className="notititle">Artificial Intelligence</div>
                        <div className="notibody">
                            <p>Expertise in machine learning algorithms and techniques</p>
                            <p>Proficient in deep learning frameworks such as TensorFlow and PyTorch</p>
                            <p>Experience in natural language processing (NLP) and computer vision</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div class="notification">
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div className="notititle">Neural Networks</div>
                        <div className="notibody">
                            <p>Certified TensorFlow developer with hands-on experience</p>
                            <p>Knowledgeable in building and deploying deep learning models using TensorFlow</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
</>

    )
}