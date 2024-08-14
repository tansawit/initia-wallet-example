import { useAddress, useWallet } from "@initia/react-wallet-widget"
import { MsgSend } from "@initia/initia.js"

const App = () => {
  const address = useAddress()
  const { onboard, view, requestTx } = useWallet()

  if (address) {
    const send = async () => {
      const msgs = [
        MsgSend.fromProto({
          fromAddress: address,
          toAddress: address,
          amount: [{ amount: "1000000", denom: "uinit" }],
        }),
      ]
      const transactionHash = await requestTx({ msgs, memo: "" })
      console.log(transactionHash)
    }

    return (
      <>
        <button onClick={view}>{address}</button>
        <button onClick={send}>Send</button>
      </>
    )
  }

  return <button onClick={onboard}>Connect</button>
}

export default App