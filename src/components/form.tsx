import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';
import { JobKeys } from '~/hooks/useJob';
import { OriginKeys } from '~/hooks/useOrigin';
import { PersonalityKeys } from '~/hooks/usePersonality';
import { SubJobKeys } from '~/hooks/useSubJub';

// material-ui
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

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
    title: {
      margin: theme.spacing(4, 0, 1),
    },
  }),
);

const Form = () => {
  const {
    getOriginKey,
    getOriginKeys,
    selectOrigin,
    getJobKey,
    getJobKeys,
    selectJob,
    getSubJobKey,
    getSubJobKeys,
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
            variant={origin === selectedOrigin ? 'default' : 'outlined'}
            color="primary"
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
            variant={job === selectedJob ? 'default' : 'outlined'}
            color="primary"
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
                variant={subJob === selectedSubJob ? 'default' : 'outlined'}
                color="primary"
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
            variant={
              personality === selectedPersonality ? 'default' : 'outlined'
            }
            color="primary"
            onClick={() => onChangePersonality(personality)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Form;
