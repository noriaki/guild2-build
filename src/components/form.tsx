import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';
import { JobKeys } from '~/hooks/useJob';
import { OriginKeys } from '~/hooks/useOrigin';
import { PersonalityKeys } from '~/hooks/usePersonality';
import { SubJobKeys } from '~/hooks/useSubJub';

// material-ui
import Typography from '@material-ui/core/Typography';

// components
import ChipItems from './ChipItems';

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

  const jobKey = getJobKey();

  const styles = useStyles();

  return (
    <div>
      <Typography component="h2" variant="h4" className={styles.title}>
        種族
      </Typography>
      <ul className={styles.itemContainer}>
        <ChipItems
          items={getOriginKeys()}
          selectedItem={getOriginKey()}
          onChange={onChangeOrigin}
        />
      </ul>
      <Typography component="h2" variant="h4" className={styles.title}>
        職業(現職)
      </Typography>
      <ul className={styles.itemContainer}>
        <ChipItems
          items={getJobKeys()}
          selectedItem={jobKey}
          onChange={onChangeJob}
        />
      </ul>
      <Typography component="h2" variant="h4" className={styles.title}>
        職業(前職)
      </Typography>
      <ul className={styles.itemContainer}>
        <ChipItems
          items={getSubJobKeys()}
          selectedItem={getSubJobKey()}
          ignoredItem={jobKey}
          onChange={onChangeSubJob}
        />
      </ul>
      <Typography component="h2" variant="h4" className={styles.title}>
        個性
      </Typography>
      <ul className={styles.itemContainer}>
        <ChipItems
          items={getPersonalityKeys()}
          selectedItem={getPersonalityKey()}
          onChange={onChangePersonality}
        />
      </ul>
    </div>
  );
};

export default Form;
