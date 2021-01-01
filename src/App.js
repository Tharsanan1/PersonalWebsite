import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import EducationCard from './Components/EducationCard';
import Grid from '@material-ui/core/Grid';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function App() {
  const classes = useStyles();
  const data = {
      datasets: [{
          data: [50, 30, 10, 6, 4],
          backgroundColor: [
            '#404dd6',
            '#c70c38',
            '#a714b8',
            '#32ab11',
            '#d4ca0f'
        ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Java',
          'Javascript',
          'Python',
          'C#',
          'C++'
      ]
  };
  return (
    <div style={{backgroundColor:'#edeef0'}}>
      <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
        <Avatar alt="Remy Sharp" src="./images/profile.jpeg" className={classes.large} />
      </div>
      <div style={{height : '5vw'}}></div>
      <div style={{overflow: 'hidden'}}>
        <div className={"slider-education-parent"}>
          <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
            <div style={{fontSize : '3vw'}}>Education</div>
          </div>


          <div style={{height : '1vw'}}></div>
          <div style={{height : '400px'}}>
            <div id="education_slide" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                    <EducationCard url={'./images/high_school.jpeg'} heading={'High school'} content={<div>School : T/R.K.M Sri Koneswara Hindu college<br/>Duration : 2013 - 2014<br/>Stream : Mathematics<br/>Island Rank : 11<br/>Distrct Rank : 1</div>}/>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                    <EducationCard url={'./images/UOM.png'} heading={'University'} content={<div>Name : University of Moratuwa<br/>Duration : 2015 - 2020<br/>BSc(hons) in Computer Science and Engineering<br/>GPA : 3.8<br/></div>}/>
                  
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#education_slide" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#education_slide" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div style={{height : '5vw'}}></div>
        </div>


        <div className={"slider-experience-parent"}>
          <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
            <div style={{fontSize : '3vw'}}>Experience</div>
          </div>



          <div style={{height : '1vw'}}></div>
          <div>
            <div id="experience_slide" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                    <EducationCard url={'./images/sysco_labs.png'} heading={'SyscoLabs'} content={<div>Role : Software engineering intern<br/>Duration : 2018 Jun - Dec<br/>Designed and implemented web portal for managing cloud resources.<br/></div>}/>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                    <EducationCard url={'./images/google_summer_of_code.png'} heading={'GSOC'} content={<div>Role : Student participant<br/>Duration : 2019 Apr - Sep<br/>Designed and implemented Intellij plugin for CPAchecker tool.<br/></div>}/>
                  
                  </div>
                </div>
                <div className="carousel-item">
                  <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
                    <EducationCard url={'./images/enactor.png'} heading={'Enactor'} content={<div>Role : Software Engineer<br/>Duration : 2020 Feb - current<br/>Working in payment team. Day to day work involves payment portal and gateway related implementations and design.</div>}/>
                  
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#experience_slide" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#experience_slide" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div style={{height : '5vw'}}></div>
        </div>
      </div>

      <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
        <div style={{fontSize : '3vw'}}>Projects</div>
      </div>

      <div style={{height : '5vw'}}></div>

      <div>
        <Grid container className={classes.root} spacing={5}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              <EducationCard url={'./images/siddhi.png'} heading={'Siddhi LLVM'} content={<div>Static compiler for Siddhi query language to produce sync stream processor.<br/></div>}/>
              <EducationCard url={'./images/intellij.jpg'} heading={'Cpachecker Intellij Plugin'} content={<div>Designed and developed an Intellij plugin to support CPAchecker framework in CLion IDE.<br/></div>}/>
              <EducationCard url={'./images/aws.jpg'} heading={'AWS Tracker'} content={<div>Designed and developed AWS resources management system for Sysco LABS internal usage.<br/></div>}/>
              <EducationCard url={'./images/kaggle.png'} heading={'DengAI'} content={<div>Implemented dengue cases prediction model using random forest, support vector regression, XGBoost and LSTM.<br/></div>}/>
              <EducationCard url={'./images/android.jpg'} heading={'Contact Details Manager'} content={<div>Android application to manage visiting cards by converting them to digital form. Used object character recognition.<br/></div>}/>
              <EducationCard url={'./images/os_scheduler.png'} heading={'Operating System Scheduler'} content={<div>Designed and developed a visual simulation for round robin, shortest job next, shortest remaining time next and priority scheduling.<br/></div>}/>
              <EducationCard url={'./images/data_encryption.jpeg'} heading={'Image Encrypter'} content={<div>Implemented a image encryption web application using react and canvas.<br/></div>}/>
              <EducationCard url={'./images/opencv.png'} heading={'Virtual Keyboard'} content={<div>Implmeneted a virtual keyboard using openCV and Python.<br/></div>}/>
              <EducationCard url={'./images/recursion.jpeg'} heading={'Interview Scheduler'} content={<div>Implmented Interview scheduling application for our university career fair<br/></div>}/>
              <EducationCard url={'./images/keystroke.jpg'} heading={'Biometric Authenticator'} content={<div>Implemented a biometric authenticator which  utilizes the keystroke dynamics of a person<br/></div>}/>
             <EducationCard url={'./images/paandi.jpg'} heading={'Game Engine Pallankuzhi'} content={<div>Implmented game engine for predicting best play pattern for Pallankuzhi Game.<br/></div>}/>
             <EducationCard url={'./images/encrypter.jpeg'} heading={'Large File Encrypter'} content={<div>Implemented a java application to encrypt large files.<br/></div>}/>
             
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{height : '5vw'}}></div>
      <div className={classes.root} style={{alignItems: 'center',flex: 1, justifyContent: 'center'}}>
        <div style={{fontSize : '2vw'}}>Percentage of time spent with Languages - Rough estimate</div>
      </div>
      <div style={{height : '5vw'}}></div>
      

      <Doughnut data={data} />
    </div>
  );
}

export default App;
