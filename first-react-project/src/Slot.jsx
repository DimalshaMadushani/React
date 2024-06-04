export default function Slot({val1, val2, val3}){
    // const input = {[val1, val2, val3]}
    const isEqual = ((val1 === val2) && (val2 === val3))
    // const result = isEqual ? 'You win!' : 'You Lose'
    // const styles = {color: isEqual ? 'green' : 'red'}
    // {((val1 === val2) && (val2 === val3)) ?  }
    return (
        <div>
           <h1> {val1} {val2} {val3}</h1>
           <h2 style={{color: isEqual ? 'green' : 'red'}}>
             {isEqual ? 'You win!' : 'You Lose'}
           </h2>
           {isEqual  && <h3>Congrats!</h3>}
            
        </div>
    )
}