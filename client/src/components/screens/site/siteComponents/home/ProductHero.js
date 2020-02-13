import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    // <ProductHeroLayout backgroundClassName={classes.background}>
    <div>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField noBorder className={classes.textField} placeholder="Your email" />
                <Button type="submit" color="primary" variant="contained" className={classes.button}>
                    Keep me updated
                </Button>
        <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href="/premium-themes/onepirate/sign-up/"
        >
            Register
        </Button>
      </form>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    {/* </ProductHeroLayout> */}
    </div>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
