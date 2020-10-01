import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';
import { JobKeys } from '~/hooks/useJob';
import { OriginKeys } from '~/hooks/useOrigin';
import { PersonalityKeys } from '~/hooks/usePersonality';
import { SubJobKeys } from '~/hooks/useSubJub';

// material-ui
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

// styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      margin: 0,
      padding: theme.spacing(0.5),
      '& > li': {
        margin: theme.spacing(0.5),
      },
    },
    avatarSelected: {
      color: `${theme.palette.primary.main} !important`,
      backgroundColor: `${theme.palette.primary.contrastText} !important`,
    },
    avatar: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '& img': {
        filter: 'invert(1)',
      },
    },
    title: {
      margin: theme.spacing(4, 0, 1),
    },
  }),
);

const Form = () => {
  const {
    getOriginKey,
    getOriginKeys,
    getOriginIcon,
    selectOrigin,
    getJobKey,
    getJobKeys,
    getJobIcon,
    selectJob,
    getSubJobKey,
    getSubJobKeys,
    getSubJobIcon,
    selectSubJob,
    getPersonalityKey,
    getPersonalityKeys,
    selectPersonality,
  } = CharactorContainer.useContainer();

  const onChangeOrigin = (value: OriginKeys) => selectOrigin(value);
  const onChangeJob = (value: JobKeys) => selectJob(value);
  const onChangeSubJob = (value: SubJobKeys) => selectSubJob(value);
  const onChangePersonality = (value: PersonalityKeys) =>
    selectPersonality(value);

  const selectedOrigin = getOriginKey();
  const selectedJob = getJobKey();
  const selectedSubJob = getSubJobKey();
  const selectedPersonality = getPersonalityKey();

  const styles = useStyles();

  return (
    <div>
      <Typography component="h2" variant="h4" className={styles.title}>
        種族
      </Typography>
      <ul className={styles.itemContainer}>
        {getOriginKeys().map((origin) => (
          <Chip
            key={origin}
            component="li"
            clickable
            label={origin}
            avatar={
              <Avatar alt={origin} src={`/icons/${getOriginIcon(origin)}`} />
            }
            variant={origin === selectedOrigin ? 'default' : 'outlined'}
            color="primary"
            classes={{
              avatarColorPrimary:
                origin === selectedOrigin
                  ? styles.avatarSelected
                  : styles.avatar,
            }}
            onClick={() => onChangeOrigin(origin)}
          />
        ))}
      </ul>
      <Typography component="h2" variant="h4" className={styles.title}>
        職業(現職)
      </Typography>
      <ul className={styles.itemContainer}>
        {getJobKeys().map((job) => (
          <Chip
            key={job}
            component="li"
            clickable
            label={job}
            avatar={<Avatar alt={job} src={`/icons/${getJobIcon(job)}`} />}
            variant={job === selectedJob ? 'default' : 'outlined'}
            color="primary"
            classes={{
              avatarColorPrimary:
                job === selectedJob ? styles.avatarSelected : styles.avatar,
            }}
            onClick={() => onChangeJob(job)}
          />
        ))}
      </ul>
      <Typography component="h2" variant="h4" className={styles.title}>
        職業(前職)
      </Typography>
      <ul className={styles.itemContainer}>
        {getSubJobKeys().map(
          (subJob) =>
            subJob !== selectedJob && (
              <Chip
                key={subJob}
                component="li"
                clickable
                label={subJob}
                avatar={
                  subJob === 'マスター' ? (
                    <Avatar alt={subJob}>M</Avatar>
                  ) : (
                    <Avatar
                      alt={subJob}
                      src={`/icons/${getSubJobIcon(subJob)}`}
                    />
                  )
                }
                variant={subJob === selectedSubJob ? 'default' : 'outlined'}
                color="primary"
                classes={{
                  avatarColorPrimary:
                    subJob === selectedSubJob
                      ? styles.avatarSelected
                      : styles.avatar,
                }}
                onClick={() => onChangeSubJob(subJob)}
              />
            ),
        )}
      </ul>
      <Typography component="h2" variant="h4" className={styles.title}>
        個性
      </Typography>
      <ul className={styles.itemContainer}>
        {getPersonalityKeys().map((personality) => (
          <Chip
            key={personality}
            component="li"
            clickable
            label={personality}
            avatar={<Avatar alt={personality}>{personality[0]}</Avatar>}
            variant={
              personality === selectedPersonality ? 'default' : 'outlined'
            }
            color="primary"
            classes={{
              avatarColorPrimary:
                personality === selectedPersonality
                  ? styles.avatarSelected
                  : styles.avatar,
            }}
            onClick={() => onChangePersonality(personality)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Form;
