import styles from './index.module.css'

export default function PokemonCard({name , image, types, stats, typeClass}) {
  var typeClassName = typeClass[0].type.name;
  const typeHandler  = () =>{
      var typeHandlerArr = [];
      typeHandlerArr.push(types[0].type.name);
        if (types[1]) {
          typeHandlerArr.push(types[1].type.name);
        }
        return typeHandlerArr;
    }

  return (
    <div className={`card mb-4 ${styles.card_poke}`}>
      <div className="row g-0">
        <div className="col-md-5">
          <div className="card-body h-100">
            <h5 className={styles.title_poke}>
            {name}
            </h5>
            <div className={styles.stats_poke}>
              <div className='row'>
                <div className='col-12'>
                {stats[1].base_stat}
                </div>
                <div>
                Attack
                </div>
              </div>
              <div>
                <div>
                {stats[2].base_stat} 
                </div>
                <div>
                Defense
                </div>
              </div>
            </div>
            <div className={styles.div_labels}>
            {typeHandler().map((handler) => 
              <span className={`badge mx-3 bg-${handler}`}>{handler}</span>
            )}
            </div>
          </div>
        </div>
        <div className={`col-md-7 text-center card-img-pokemon bg-${typeClassName}`}>
          <img src={image} className="img-fluid rounded-start" alt={name}/>
        </div>
      </div>
    </div>
  );
}


